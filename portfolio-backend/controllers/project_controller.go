package controllers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/yasinnerten/portfolio-backend/database"
	"github.com/yasinnerten/portfolio-backend/models"
)

// CreateProject creates a new project
func CreateProject(c *gin.Context) {
	var project models.Project

	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	project.CreatedAt = time.Now()
	project.UpdatedAt = time.Now()

	result := database.GetDB().Create(&project)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create project"})
		return
	}

	c.JSON(http.StatusCreated, project)
}

// GetAllProjects retrieves all projects
func GetAllProjects(c *gin.Context) {
	var projects []models.Project

	result := database.GetDB().Find(&projects)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve projects"})
		return
	}

	c.JSON(http.StatusOK, projects)
}

// GetProject retrieves a specific project by ID
func GetProject(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid project ID"})
		return
	}

	var project models.Project
	result := database.GetDB().First(&project, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	c.JSON(http.StatusOK, project)
}

// UpdateProject updates an existing project
func UpdateProject(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid project ID"})
		return
	}

	var project models.Project
	result := database.GetDB().First(&project, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	if err := c.ShouldBindJSON(&project); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	project.UpdatedAt = time.Now()
	database.GetDB().Save(&project)

	c.JSON(http.StatusOK, project)
}

// DeleteProject deletes a project
func DeleteProject(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid project ID"})
		return
	}

	var project models.Project
	result := database.GetDB().First(&project, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Project not found"})
		return
	}

	database.GetDB().Delete(&project)

	c.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
}
