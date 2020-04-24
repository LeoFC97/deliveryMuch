const stringUtil = require('./stringUtils')

describe('String util ', () => {
  test('Should return an string without marks', () => {
    const textWithMarks = '\nGuacamole Dip Recipe\n\n'
    const textWithoutMarks = stringUtil.removeMarks(textWithMarks)
    expect(textWithoutMarks).toEqual('Guacamole Dip Recipe')
  })
  test('Should return an string without blank spaces', () => {
    const stringWithBlankSpaces = ' onions  '
    const stringWithouBlankSpaces = stringUtil.removeBlankSpaces(stringWithBlankSpaces)
    expect(stringWithouBlankSpaces).toEqual('onions')
  })
})
