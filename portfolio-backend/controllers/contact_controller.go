package controllers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/yasinnerten/portfolio-backend/database"
	"github.com/yasinnerten/portfolio-backend/models"
)

// SubmitContactForm handles the contact form submission
func SubmitContactForm(c *gin.Context) {
	var contact models.Contact

	// Bind JSON request to contact struct
	if err := c.ShouldBindJSON(&contact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Set created time
	contact.CreatedAt = time.Now()

	// Save to database
	result := database.GetDB().Create(&contact)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save contact form"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Contact form submitted successfully"})
}

// GetAllContacts retrieves all contact submissions (for admin purposes)
func GetAllContacts(c *gin.Context) {
	var contacts []models.Contact

	result := database.GetDB().Find(&contacts)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve contacts"})
		return
	}

	c.JSON(http.StatusOK, contacts)
}
