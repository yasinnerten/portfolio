package main

import (
	"log"

	"github.com/yasinnerten/portfolio-backend/config"
	"github.com/yasinnerten/portfolio-backend/database"
	"github.com/yasinnerten/portfolio-backend/routes"
)

func main() {
	// Load configurations
	config.LoadConfig()

	// Initialize database
	if err := database.InitDB(); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}

	// Set up router
	r := routes.SetupRouter()

	// Start server
	port := config.GetConfig().Port
	log.Printf("Server starting on port %s...", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
