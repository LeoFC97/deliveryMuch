const httpController = require(`./httpController`)


module.exports= {
  async returnRecipe(req,res){
    const ingredients = req.query.i
    let keywords = (ingredients.split('i=')[0]).split(',')

    const returnOfRecipePuppy = await httpController.getRecipe(keywords)

    let recipes = await returnOfRecipePuppy.results.map( recipe => { 
      const titleWithoutMarks = recipe.title.replace(/\n/g,'')
      let arrayOfIngredients = recipe.ingredients.split(',')
      const ingredientsCleaned = arrayOfIngredients.map(Function.prototype.call.bind(String.prototype.trim)) 
      //for any reason, the trim() method wasnt working :/
      const ingredientsSorted = ingredientsCleaned.sort()
      return { title:titleWithoutMarks , link: recipe.href, ingredients:ingredientsSorted} 
    })
    const teste ={
      keyowrds: keywords,
      recipes:recipes
    }
    return res.status(200).send(teste)
  }
}