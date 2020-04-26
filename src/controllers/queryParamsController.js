module.exports = {
  splitQueryIntoArray (queryToBeSplited) {
    return (queryToBeSplited.split('i=')[0]).split(',')
  },
  checkNumberOfParams (arrayToBeCheked) {
    if (arrayToBeCheked.length > 0 && arrayToBeCheked.length < 4) {
      return true
    }
    return false
  }
}
