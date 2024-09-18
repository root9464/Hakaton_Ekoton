package main

import (
	"log"

	"github.com/gofiber/fiber/v2"

	controllers "root/controllers"
	db "root/database"
	middleware "root/middleware"
	models "root/models"
)

type Server struct {
	app  *fiber.App
	port string
}

func (s *Server) allRoutes() {

	s.app.Post("/singup", controllers.SingUp)
	s.app.Post("/login", controllers.Login)
	s.app.Get("/hello", middleware.AuthRole, controllers.Hello)

	s.app.Get("/postimage/:id", controllers.GetPicture)
	s.app.Get("/posttwoimage/:id", controllers.GetTwoPicture)

	s.app.Post("/create-organism", controllers.CreateOrganism)
	s.app.Get("/get-organism/:id", controllers.GetOrganismById)
}

func NewServer(port string) *Server {
	s := &Server{
		app:  fiber.New(),
		port: port,
	}

	//s.app.Use(logger.New())
	s.app.Static("/image", "./image")

	return s
}

func (s *Server) Run() {
	s.allRoutes()

	log.Fatal(s.app.Listen(":" + s.port))

	//log.Fatal(s.app.ListenTLS(":" + s.port, "./certs/minica.pem", "./certs/minica-key.pem"))
}

func main() {

	db.ConnectToDB()
	db.DB.DB.AutoMigrate(&models.User{}, &models.Organism{}, &models.Fact{}, &models.Photo{})

	s := NewServer("3000")
	s.Run()

}
