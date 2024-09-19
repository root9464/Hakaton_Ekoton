package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	controllers "root/controllers"
	db "root/database"

	//middleware "root/middleware"
	models "root/models"
)

type Server struct {
	app  *fiber.App
	port string
}

func (s *Server) allRoutes() {
	s.app.Post("/ping", func(c *fiber.Ctx) error {
		var body struct {
			Name string `json:"name"`
		}

		if err := c.BodyParser(&body); err != nil {
			return c.Status(500).JSON(&fiber.Map{
				"status": "fail",
				"error":  err.Error(),
			})
		}

		return c.JSON(&fiber.Map{
			"status": "success",
			"body":   body,
		})
	})

	s.app.Post("/singup", controllers.SignUp)

	// s.app.Get("/postimage/:id", controllers.GetPicture)
	// s.app.Get("/posttwoimage/:id", controllers.GetTwoPicture)

	s.app.Post("/create-organism", controllers.CreateOrganism)
	s.app.Get("/get-organism", controllers.GetOrganism)
	s.app.Delete("/delete-organism/:id", controllers.DeleteOrganismByID)

	s.app.Post("/application", controllers.Application)
	s.app.Patch("/update/:id", controllers.Update)

}

func NewServer(port string) *Server {
	s := &Server{
		app:  fiber.New(),
		port: port,
	}

	//s.app.Use(logger.New())
	s.app.Static("/image", "./image")
	s.app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	return s
}

func (s *Server) Run() {
	s.allRoutes()

	log.Fatal(s.app.Listen(":" + s.port))

	//log.Fatal(s.app.ListenTLS(":"+s.port, "./certs/minica.pem", "./certs/minica-key.pem"))
}

func main() {

	db.ConnectToDB()
	db.DB.DB.AutoMigrate(&models.User{}, &models.Organism{}, &models.Fact{}, &models.Photo{}, &models.Application{})

	s := NewServer("3000")
	s.Run()

}
