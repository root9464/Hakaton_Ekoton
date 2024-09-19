package service

import (
	db "root/database"
	"root/models"

	"github.com/gofiber/fiber/v2"
)

func Application(ctx *fiber.Ctx, application *models.Application) error {
	db.DB.DB.Create(application)
	
	return ctx.Status(200).JSON(fiber.Map{
		"status": "success",
	})
}
