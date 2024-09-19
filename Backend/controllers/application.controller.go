package controllers

import (
	"root/models"
	"root/service"

	"github.com/gofiber/fiber/v2"
)

func Application(ctx *fiber.Ctx) error {
	application := new(models.Application)

	if err := ctx.BodyParser(&application); err != nil {
		return ctx.Status(500).JSON(fiber.Map{
			"status": "fail to read body",
		})
	}

	return service.Application(ctx,application)

}
