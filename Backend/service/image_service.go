package service

import (
	db "root/database"
	model "root/models"

	"github.com/gofiber/fiber/v2"
)

func Pucture(c *fiber.Ctx, id int) error {
	var photo model.Photo
	db.DB.DB.Where("organism_id= ?", id).First(&photo)
	if photo.ID != 0 {
		return c.SendFile("./image/" + photo.Name + ".jpg")
	}
	return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
		"status": "not found",
	})
	
}

func TwoPicture(c *fiber.Ctx, id int) error {
	var photos []model.Photo
	db.DB.DB.Where("name <> ?", "jinzhu").Find(&photos)
	clices := photos[1:3]
	if len(clices) > 0 {
		for _, p := range photos {
			c.SendFile("./image/" + p.Name + ".jpg")
		}
	}

	return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
		"status": "not found",
	})

}
