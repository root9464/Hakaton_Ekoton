package service

import (
	db "root/database"
	"root/dto"
	"root/models"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func CreateOrganism(ctx *fiber.Ctx, organismDto *dto.OrganismFull) error {
	organism := models.Organism{
		Class:       organismDto.Class,
		Name:        organismDto.Name,
		Title:       organismDto.Title,
		Description: organismDto.Description,
		Geo:         organismDto.Geo,
		Lifestyle:   organismDto.Lifestyle,
		Appearance:  organismDto.Appearance,
	}
	if err := db.DB.DB.Create(&organism).Error; err != nil {
		return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	for _, factName := range organismDto.Facts {
		fact := models.Fact{
			Fact:       factName,
			OrganismID: organism.ID,
		}
		if err := db.DB.DB.Create(&fact).Error; err != nil {
			return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
		}
	}

	return ctx.Status(200).JSON(organism)
}

func GetOrganism(ctx *fiber.Ctx, filter dto.FilterOrganismDTO) error {
	if filter.Short == "true" {
		organisms, err := loadOrganisms[[]dto.Organism](filter)
		if err != nil {
			return handleDBError(ctx, err, "Ошибка при получении списка организмов")
		}
		if len(organisms) == 0 {
			return ctx.Status(404).JSON(fiber.Map{"error": "Организмы не найдены"})
		}
		return ctx.Status(200).JSON(organisms)
	}

	organisms, err := loadOrganisms[[]models.Organism](filter)
	if err != nil {
		return handleDBError(ctx, err, "Ошибка при получении списка организмов")
	}

	if len(organisms) == 0 {
		return ctx.Status(404).JSON(fiber.Map{"error": "Организмы не найдены"})
	}

	return ctx.Status(200).JSON(organisms)
}

// func DeleteOrganism(ctx *fiber.Ctx, id int) error {
// 	organism := new(models.Organism)
// 	db.DB.DB.Delete(organism, id)
// 	return ctx.Status(200).JSON("OK")
// }

// Util func
func handleDBError(ctx *fiber.Ctx, err error, notFoundMessage string) error {
	if err == gorm.ErrRecordNotFound {
		return ctx.Status(404).JSON(fiber.Map{"error": notFoundMessage})
	}
	return ctx.Status(500).JSON(fiber.Map{"error": "Ошибка при обращении к базе данных"})
}

func loadOrganisms[T any](filter dto.FilterOrganismDTO) (T, error) {
	organisms := new(T)
	query := db.DB.DB

	if filter.Short == "true" {
		query = query.Table("organisms").Select("organisms.id, organisms.name, organisms.class, organisms.description, MIN(photos.name) as photo").
			Joins("LEFT JOIN photos ON photos.organism_id = organisms.id").
			Group("organisms.id")
	} else {
		query = query.Preload("Photos").Preload("Facts")
	}

	if filter.Class != "" {
		query = query.Where("class = ?", filter.Class)
	}

	var err error
	if filter.Id != "" {
		err = query.First(organisms, filter.Id).Error
	} else {
		err = query.Find(organisms).Error
	}
	return *organisms, err
}

func UpdateOrganizm(ctx *fiber.Ctx, id int, organizm *models.Organism) error {
	existOrganism := new(models.Organism)
	err := db.DB.DB.First(existOrganism, id).Error
	if err == gorm.ErrRecordNotFound {
		return ctx.Status(404).JSON(fiber.Map{"error": "Такого организма не существует"})
	}

	err = db.DB.DB.Model(existOrganism).Updates(organizm).Error
	if err != nil {
		return ctx.Status(500).JSON(fiber.Map{"error": "Ошибка при обновлении организма"})
	}

	return ctx.Status(200).JSON(fiber.Map{"status": "success"})
}

func DeleteOrganism(ctx *fiber.Ctx, id int) error{
	organism := new(models.Organism)
	err := db.DB.DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Delete(organism, id).Error; err != nil {
			return err
		}

		if err := tx.Delete(&[]models.Photo{}, "organism_id = ?", id).Error; err != nil {
			return err
		}

		if err := tx.Delete(&[]models.Fact{}, "organism_id = ?", id).Error; err != nil {
			return err
		}

		return nil
	})

	if err != nil {
		return ctx.Status(500).JSON(fiber.Map{"error": "Ошибка при удалении организма"})
		
	}

	return ctx.Status(200).JSON(fiber.Map{"status": "success"})
}