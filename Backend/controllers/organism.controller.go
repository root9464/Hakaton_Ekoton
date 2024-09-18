package controllers

import (
	"root/dto"
	"root/service"

	"github.com/asaskevich/govalidator"

	"github.com/gofiber/fiber/v2"
)

func CreateOrganism(ctx *fiber.Ctx) error {
  var organism dto.OrganismFull
  if err := ctx.BodyParser(&organism); err != nil {
    return ctx.Status(400).JSON(fiber.Map{"error": "Не удается прочитать JSON"})
  }
  if _, err := govalidator.ValidateStruct(organism); err != nil {
		return ctx.Status(400).JSON(fiber.Map{"error": err.Error()})
	}
  return service.CreateClass(ctx, &organism)
}
