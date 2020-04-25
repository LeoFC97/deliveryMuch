const httpController = require('./httpController')
const sortUtils = require('../utils/sortUtils')
const stringUtils = require('../utils/stringUtils')
const errorController = require('../controllers/errorController')

module.exports = {
  async returnRecipe (req, res) {
    const { i } = req.query
    if (!i) {
      const error = errorController.missingParams()
      return res.status(error.status).send(error.errorMensage)
    }

    const keywords = (i.split('i=')[0]).split(',')
    const returnOfRecipePuppy = await httpController.getRecipe(keywords)

    const recipes = await returnOfRecipePuppy.results.map(recipe => {
      const titleWithoutMarks = stringUtils.removeMarks(recipe.title)
      const arrayOfIngredients = recipe.ingredients.split(',')
      const ingredientsCleaned = arrayOfIngredients.map(elem => stringUtils.removeBlankSpaces(elem))
      const ingredientsSorted = sortUtils.alphabeticalSort(ingredientsCleaned)
      return { title: titleWithoutMarks, link: recipe.href, ingredients: ingredientsSorted }
    })

    for (let i = 0; i < recipes.length; i++) {
      const returnOfGifRequest = await httpController.getGif(recipes[i].title)
      recipes[i].gif = returnOfGifRequest.data[0].images.original.url
      console.log(i)
    }

    // const returnOfGifRequest = await httpController.getGif(recipe.title)
    // return returnOfGifRequest.data[0].images.original.url
    console.log(recipes)

    const objectToReturn = {
      keyowrds: keywords,
      recipes: recipes
    }
    return res.status(200).send(objectToReturn)
  }
}
