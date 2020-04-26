module.exports = {
  removeMarks (stringToBeCleaned) {
    stringToBeCleaned = stringToBeCleaned.replace(/\n/g, '')
    stringToBeCleaned = stringToBeCleaned.replace(/\t/g, '')
    stringToBeCleaned = stringToBeCleaned.replace(/\r/g, '')
    return stringToBeCleaned
  },
  removeBlankSpaces (stringToBeCleaned) {
    return stringToBeCleaned.trim()
  }
}
