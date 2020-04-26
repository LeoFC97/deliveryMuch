module.exports = {
  splitQueryIntoArray (queryToBeSplited) {
    return (queryToBeSplited.split('i=')[0]).split(',')
  }
}
