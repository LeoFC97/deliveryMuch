const axios = require(`axios`)

module.exports={
  async getGif(){

  },
  async getRecipe(url1){
    console.log(url1)
    const url = `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`
    const resultado = await axios.get(url)
    console.log(resultado.data)
  }
}