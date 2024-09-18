package service

import (
	db "root/database"
	"root/dto"
	"root/models"

	"github.com/gofiber/fiber/v2"
)

func CreateClass(ctx *fiber.Ctx, organismDto *dto.OrganismFull) error {
	// Преобразовать dto.MammalsFull в models.Class
	organism := models.Organism{
		Name:        organismDto.Name,
		Title:       organismDto.Title,
		Description: organismDto.Description,
		Geo:         organismDto.Geo,
		Lifestyle:   organismDto.Lifestyle,
		Appearance:  organismDto.Appearance,
	}
	// Создать класс в базе данных
	if err := db.DB.DB.Create(&organism).Error; err != nil {
		return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	// Создать фотографии в базе данных
	for _, photoName := range organismDto.Photos {
		photo := models.Photo{
			Name:   photoName,
			OrganismID: organism.ID,
		}
		if err := db.DB.DB.Create(&photo).Error; err != nil {
			return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
		}
	}
	// Создать факты в базе данных
	for _, factName := range organismDto.Facts {
		fact := models.Fact{
			Fact:    factName,
			OrganismID: organism.ID,
		}
		if err := db.DB.DB.Create(&fact).Error; err != nil {
			return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
		}
	}

	return ctx.Status(200).JSON(organism)
}
