package service

import (
	db "root/database"
	"root/models"

	"github.com/gofiber/fiber/v2"
)

func Application(ctx *fiber.Ctx, application *models.Application) error {
	if err := db.DB.DB.Create(&application).Error; err != nil {
		return ctx.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return ctx.Status(200).JSON(fiber.Map{
		"status": "success",
	})
}
