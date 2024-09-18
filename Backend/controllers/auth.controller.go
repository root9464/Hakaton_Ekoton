package controllers

import (
	"net/http"
	"root/initializers"
	"root/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SingUp(c *fiber.Ctx) error {
	// body struct
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Role     string `json:"role"`
	}

	// parse body
	if err := c.BodyParser(&body); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "fail to read body",
		})
	}

	//hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "fail to hash password",
		})
	}

	//create user
	user := models.User{Email: body.Email, Password: string(hash), Role: body.Role}
	result := initializers.DB.DB.Create(&user)

	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "fail to create user",
		})
	}

	//respon
	return c.Status(http.StatusCreated).JSON(fiber.Map{
		"status": "success",
	})
}

func Login(c *fiber.Ctx) error {
	// body struct
	var body struct {
		Email    string `json:"email"`
		Password string `json:"password"`
		Role     string `json:"role"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "fail to read body",
		})
	}

	//find user
	var user models.User
	initializers.DB.DB.First(&user, "email = ?", body.Email)
	if user.ID == 0 {
		return c.Status(404).JSON(fiber.Map{
			"status": "invalid email or password",
		})
	}

	//compare password and hash password
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"status": "invalid email or password",
		})
	}

	//generate jwt
	//respon
	return c.Status(http.StatusOK).JSON(fiber.Map{
		"status": "success",
	})

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
