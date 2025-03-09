package database

import (
	"github.com/glebarez/sqlite" // Pure Go SQLite implementation for GORM
	"github.com/yasinnerten/portfolio-backend/config"
	"github.com/yasinnerten/portfolio-backend/models"
	"gorm.io/gorm"
)

var DB *gorm.DB

// InitDB initializes the database connection
func InitDB() error {
	var err error

	dbPath := config.GetConfig().DBPath

	// Using the pure Go SQLite implementation from glebarez/sqlite
	DB, err = gorm.Open(sqlite.Open(dbPath), &gorm.Config{})
	if err != nil {
		return err
	}

	// Auto migrate the schemas
	err = DB.AutoMigrate(&models.Contact{}, &models.Project{})
	if err != nil {
		return err
	}

	return nil
}

// GetDB returns the database instance
func GetDB() *gorm.DB {
	return DB
}
