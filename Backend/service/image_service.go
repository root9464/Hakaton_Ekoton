package service

import (
	"log"
	db "root/database"
	model "root/models"

	"github.com/gofiber/fiber/v2"
)

func Pucture(c *fiber.Ctx, id int) error {
	var photo model.Photo
	db.DB.DB.Where("organism_id= ?", id).First(&photo)
	if photo.ID != 0 {
		return c.SendFile("./image/" + photo.Name + ".jpg")
	} else {
		log.Println("./image/" + photo.Name + ".jpg")
	}
	return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
		"status": "not found",
	})
}
