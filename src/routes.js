const express = require('express')
const routes = new express.Router()
const recipeController = require('./controllers/recipeController')

routes.get('/recipes', recipeController.returnRecipe)

module.exports = routes
