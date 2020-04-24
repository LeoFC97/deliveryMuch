const httpController = require('./httpController')
const sortUtils = require('../utils/sortUtils')
const stringUtils = require('../utils/stringUtils')

module.exports = {
  async returnRecipe (req, res) {
    const ingredients = req.query.i
    const keywords = (ingredients.split('i=')[0]).split(',')

    const returnOfRecipePuppy = await httpController.getRecipe(keywords)

    const recipes = await returnOfRecipePuppy.results.map(recipe => {
      const titleWithoutMarks = stringUtils.removeMarks(recipe.title)
      const arrayOfIngredients = recipe.ingredients.split(',')
      const ingredientsCleaned = arrayOfIngredients.map(elem => stringUtils.removeBlankSpaces(elem))
      console.log(ingredientsCleaned)
      // for any reason, the trim() method wasnt working :/
      const ingredientsSorted = ingredientsCleaned.sort()
      return { title: titleWithoutMarks, link: recipe.href, ingredients: ingredientsSorted }
    })
    const teste = {
      keyowrds: keywords,
      recipes: recipes
    }
    return res.status(200).send(teste)
  }
}
