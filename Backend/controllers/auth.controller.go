package controllers

import (
	"net/http"
	db "root/database"
	"root/models"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SingUp(c *fiber.Ctx) error {
	// body struct
	var body struct {
		Firstname  string `json:"firstname" gorm:"type:varchar(100)"`
		Lastname   string `json:"lastname" gorm:"type:varchar(100)"`
		Patronymic string `json:"patronymic" gorm:"type:varchar(100)"`
		Login      string `json:"login"`
		Password   string `json:"password"`
		Role       string `json:"role"`
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
	user := models.User{
		Firstname:  body.Firstname,
		Lastname:   body.Lastname,
		Patronymic: body.Patronymic,
		Login:      body.Login,
		Password:   string(hash),
		Role:       "user",
	}
	result := db.DB.DB.Create(&user)

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
		Login    string `json:"login"`
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
	db.DB.DB.First(&user, "login = ?", body.Login)
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

func GetPicture(c *fiber.Ctx) error {
	name := c.Params("name")
	id, _ := strconv.Atoi(c.Params("id"))

	return c.SendFile("./image/" + name + "_" + strconv.Itoa(id) + ".jpg")
}

func GetDescription(c *fiber.Ctx) error {
	return nil
}
