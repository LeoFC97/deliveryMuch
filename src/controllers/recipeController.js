const httpController = require('./httpController')
const sortUtils = require('../utils/sortUtil')
const stringUtils = require('../utils/stringUtil')
const errorController = require('./errorController')
const queryParamsController = require('./queryParamsController')

module.exports = {
  async returnRecipe (req, res) {
    const { i } = req.query
    if (!i) {
      const errorObject = errorController.missingParams()
      return res.status(errorObject.status).send(errorObject.errorMensage)
    }

    const keywords = queryParamsController.splitQueryIntoArray(i)
    if (!queryParamsController.checkNumberOfParams(keywords)) {
      const errorObject = errorController.wrongParams()
      return res.status(errorObject.status).send(errorObject.errorMensage)
    }

    const returnOfRecipePuppy = await httpController.getRecipe(keywords)
    const recipes = await returnOfRecipePuppy.results.map(recipe => {
      const titleWithoutMarks = stringUtils.removeMarks(recipe.title)
      const arrayOfIngredients = queryParamsController.splitQueryIntoArray(recipe.ingredients)
      const ingredientsCleaned = arrayOfIngredients.map(elem => stringUtils.removeBlankSpaces(elem))
      const ingredientsSorted = sortUtils.alphabeticalSort(ingredientsCleaned)
      return { title: titleWithoutMarks, ingredients: ingredientsSorted, link: recipe.href }
    })

    for (let i = 0; i < recipes.length; i++) {
      const returnOfGifRequest = await httpController.getGif(recipes[i].title)
      recipes[i].gif = returnOfGifRequest.data[0].images.original.url
    }

    const objectToReturn = {
      keyowrds: keywords,
      recipes: recipes
    }
    return res.status(200).send(objectToReturn)
  }
}
