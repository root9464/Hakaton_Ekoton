package controllers

import (
	"root/dto"
	"root/service"
	"strconv"

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
  return service.CreateOrganism(ctx, &organism)
}

func GetOrganismById(ctx *fiber.Ctx) error {
  id, _ := strconv.Atoi(ctx.Params("id"))
  return service.GetOrganismByID(ctx, id)
}
