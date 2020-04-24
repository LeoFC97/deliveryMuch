const axios = require('axios')
require('dotenv').config()

module.exports = {
  async getGif () {
    console.log(process.env.GIF_API)
  },
  async getRecipe (ingredients) {
    var url = 'http://www.recipepuppy.com/api/?i='
    ingredients.map((ingredient, index) => {
      index === 0 ? url += `${ingredient}` : url += `,${ingredient}`
    })
    const resultado = await axios.get(url)
    return resultado.data
  }
}
