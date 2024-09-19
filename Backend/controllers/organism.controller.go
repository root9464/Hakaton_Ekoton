package controllers

import (
	"root/dto"
	"root/models"
	"root/service"
	"strconv"

	"github.com/asaskevich/govalidator"
	"github.com/mitchellh/mapstructure"

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

func GetOrganism(ctx *fiber.Ctx) error {
	params := ctx.Queries()
	filter := dto.FilterOrganismDTO{}
	mapstructure.Decode(params, &filter)
	return service.GetOrganism(ctx, filter)
}

func DeleteOrganismByID(ctx *fiber.Ctx) error {
	id, _ := strconv.Atoi(ctx.Params("id"))
	return service.DeleteOrganism(ctx, id)
}

func Update(ctx *fiber.Ctx) error {
	id, _ := strconv.Atoi(ctx.Params("id"))
	organizm := new(models.Organism)


	return service.UpdateOrganizm(ctx, id, organizm)
}
