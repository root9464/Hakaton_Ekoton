package service

import (
	"fmt"
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
		query = query.Select("id", "name", "class")
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
