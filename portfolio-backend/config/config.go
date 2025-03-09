package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// Config stores configuration settings
type Config struct {
	Port      string
	DBPath    string
	JWTSecret string
	Env       string
}

var config *Config

// LoadConfig loads configuration from .env file and environment variables
func LoadConfig() {
	// Load .env file if it exists
	_ = godotenv.Load()

	// Set default values
	config = &Config{
		Port:      getEnv("PORT", "8080"),
		DBPath:    getEnv("DB_PATH", "./portfolio.db"),
		JWTSecret: getEnv("JWT_SECRET", "your-secret-key"),
		Env:       getEnv("APP_ENV", "development"),
	}

	log.Println("Configuration loaded successfully")
}

// GetConfig returns the current configuration
func GetConfig() *Config {
	if config == nil {
		LoadConfig()
	}
	return config
}

// Helper function to get environment variables
func getEnv(key, defaultValue string) string {
	value := os.Getenv(key)
	if value == "" {
		return defaultValue
	}
	return value
}
