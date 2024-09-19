package controllers

import (
	"net/http"
	db "root/database"
	"root/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SignUp(c *fiber.Ctx) error {
	// body struct
	var body struct {
		Firstname string `json:"firstname"`
		Lastname  string `json:"lastname"`
		Login     string `json:"login"`
		Password  string `json:"password"`
		Role      string `json:"role"`
	}

	// parse body
	if err := c.BodyParser(&body); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "fail to read body",
		})
	}

	// find user
	var user models.User
	db.DB.DB.First(&user, "login = ?", body.Login)

	if user.ID == 0 {
		// create user
		hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), bcrypt.DefaultCost)
		if err != nil {
			return c.Status(500).JSON(fiber.Map{
				"status": "fail to hash password",
			})
		}

		user = models.User{
			Firstname: body.Firstname,
			Lastname:  body.Lastname,
			Login:     body.Login,
			Password:  string(hash),
			Role:      "user",
		}
		result := db.DB.DB.Create(&user)

		if result.Error != nil {
			return c.Status(500).JSON(fiber.Map{
				"status": "fail to create user",
			})
		}

		// response
		return c.Status(http.StatusCreated).JSON(user)
	} else {
		// compare password and hash password
		err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
		if err != nil {
			return c.Status(500).JSON(body)
		}

		// response
		return c.Status(http.StatusOK).JSON(user)
	}
}

func Validate(c *fiber.Ctx) error {
	c.JSON(fiber.Map{
		"message": "I entered",
	})
	return nil
}

func Hello(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}
