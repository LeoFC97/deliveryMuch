const stringUtil = require('./stringUtil')

describe('String util ', () => {
  test('Returns a string without marks', () => {
    const textWithMarks = '\nGuacamole Dip Recipe\n\n'
    const textWithoutMarks = stringUtil.removeMarks(textWithMarks)
    expect(textWithoutMarks).toEqual('Guacamole Dip Recipe')
  })
  test('Returns a string without blank spaces', () => {
    const stringWithBlankSpaces = ' onions  '
    const stringWithouBlankSpaces = stringUtil.removeBlankSpaces(stringWithBlankSpaces)
    expect(stringWithouBlankSpaces).toEqual('onions')
  })
})
