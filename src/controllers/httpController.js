const axios = require('axios')
require('dotenv').config()

module.exports = {
  async getGif (titleForSearch) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIF_API}&q=${titleForSearch}&limit=1&offset=0&rating=G&lang=en`
    const returnOfApi = await axios.get(url)
    return returnOfApi.data
  },
  async getRecipe (ingredients) {
    let url = 'http://www.recipepuppy.com/api/?i='
    ingredients.map((ingredient, index) => {
      index === 0 ? url += `${ingredient}` : url += `,${ingredient}`
    })
    const returnOfApi = await axios.get(url)
    return returnOfApi.data
  }
}
