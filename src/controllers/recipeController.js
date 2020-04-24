const axios = require(`axios`)
const httpController = require(`./httpController`)

module.exports= {
  async returnRecipe(req,res){
    await httpController.getRecipe(`asdasd`)
    return res.status(200).send(`true`)
  }

}