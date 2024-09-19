package controllers

import (
	"root/service"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func GetPicture(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status": "invalid id",
		})
	}
	return service.Pucture(c, id)
}

func GetTwoPicture(c *fiber.Ctx) error {
	id, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"status": "invalid id",
		})
	}
	return service.TwoPicture(c, id)
}
