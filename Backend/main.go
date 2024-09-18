package main

import (
	"github.com/gofiber/fiber/v2"

	controllers "root/controllers"
	db "root/database"
	models "root/models"
	middleware "root/middleware"
)

// func initRoutes(app *fiber.App) {
// 	users := app.Group("/auth")
// 	{
// 		app.Post("/singup", controllers.SingUp)
// 		app.Post("/login", controllers.Login)
// 		app.Get("/validate", controllers.Validate)
// 		app.Get("/hello", controllers.Hello)

// 		authenticated := users.Group("/", middleware.AuthToken)
// 		{
// 			authenticated.Get("/hello", controllers.Hello)
// 		}
// 	}

// }

func main() {

	db.ConnectToDB()

	db.DB.DB.AutoMigrate(&models.User{}, &models.Organism{}, &models.Fact{}, &models.Photo{})

	app := fiber.New()
	//initRoutes(app)

	app.Post("/singup", controllers.SingUp)
	app.Post("/login", controllers.Login)
	app.Get("/hello",middleware.AuthRole, controllers.Hello)


	app.Get("/post/:name/:id",controllers.GetPicture)


	app.Get("/fulldescription/:name/:id",controllers.GetDescription)

  app.Post("/create-organism", controllers.CreateOrganism)
  app.Get("/get-organism/:id", controllers.GetOrganismById)

	app.Listen(":3000")

}
