const httpController = require('./httpController')
const sortUtils = require('../utils/sortUtils')
const stringUtils = require('../utils/stringUtils')

module.exports = {
  async returnRecipe (req, res) {
    const { ingredients } = req.query
    const keywords = (ingredients.split('i=')[0]).split(',')

    const returnOfRecipePuppy = await httpController.getRecipe(keywords)

    const recipes = await returnOfRecipePuppy.results.map(recipe => {
      const titleWithoutMarks = stringUtils.removeMarks(recipe.title)
      const arrayOfIngredients = recipe.ingredients.split(',')
      const ingredientsCleaned = arrayOfIngredients.map(elem => stringUtils.removeBlankSpaces(elem))
      const ingredientsSorted = sortUtils.alphabeticalSort(ingredientsCleaned)
      return { title: titleWithoutMarks, link: recipe.href, ingredients: ingredientsSorted }
    })
    const teste = {
      keyowrds: keywords,
      recipes: recipes
    }
    return res.status(200).send(teste)
  }
}
