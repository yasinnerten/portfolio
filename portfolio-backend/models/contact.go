package models

import (
	"time"

	"gorm.io/gorm"
)

// Contact represents a contact form submission
type Contact struct {
	gorm.Model
	Name      string    `json:"name" binding:"required"`
	Email     string    `json:"email" binding:"required,email"`
	Subject   string    `json:"subject" binding:"required"`
	Message   string    `json:"message" binding:"required"`
	CreatedAt time.Time `json:"created_at"`
}
