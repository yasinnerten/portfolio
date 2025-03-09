package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/yasinnerten/portfolio-backend/config"
	"github.com/yasinnerten/portfolio-backend/controllers"
	"github.com/yasinnerten/portfolio-backend/middleware"
)

// SetupRouter configures the API routes
func SetupRouter() *gin.Engine {
	// Set Gin mode based on environment
	if config.GetConfig().Env == "production" {
		gin.SetMode(gin.ReleaseMode)
	}

	r := gin.New()

	// Apply middleware
	r.Use(gin.Recovery())
	r.Use(middleware.Logger())
	r.Use(middleware.SetupCORS())

	// Static files
	r.Static("/static", "./static")

	// API routes
	api := r.Group("/api")
	{
		// Contact form
		api.POST("/contact", controllers.SubmitContactForm)
		api.GET("/contacts", controllers.GetAllContacts) // Admin access should be protected

		// Projects
		projects := api.Group("/projects")
		{
			projects.GET("", controllers.GetAllProjects)
			projects.GET("/:id", controllers.GetProject)
			projects.POST("", controllers.CreateProject)
			projects.PUT("/:id", controllers.UpdateProject)
			projects.DELETE("/:id", controllers.DeleteProject)
		}

		// Health check
		api.GET("/health", func(c *gin.Context) {
			c.JSON(200, gin.H{
				"status": "ok",
			})
		})
	}

	return r
}
