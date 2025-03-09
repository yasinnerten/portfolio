package models

import (
	"time"

	"gorm.io/gorm"
)

// Project represents a project in the portfolio
type Project struct {
	gorm.Model
	Title         string    `json:"title" binding:"required"`
	Description   string    `json:"description" binding:"required"`
	ImageURL      string    `json:"image_url"`
	Tags          string    `json:"tags"`
	Contributions string    `json:"contributions"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
