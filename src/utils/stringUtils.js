module.exports = {
  removeMarks (stringToBeCleaned) {
    return stringToBeCleaned.replace(/\n/g, '')
  },
  removeBlankSpaces (stringToBeCleaned) {
    return stringToBeCleaned.trim()
  }
}
