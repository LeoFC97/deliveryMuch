const queryParamsController = require('./queryParamsController')

describe('query ParamsController ', () => {
  test('Splits the query and returns an array', () => {
    const originalQuery = 'tomato,onions,avocado'
    const array = queryParamsController.splitQueryIntoArray(originalQuery)
    expect(array).toEqual(['tomato', 'onions', 'avocado'])
  })
  test('Returns true if the array size > 1 ', () => {
    const arrayMock = ['tomato', 'onions', 'avocado']
    expect(queryParamsController.checkNumberOfParams(arrayMock)).toBe(true)
  })
  test('Returns false if the array size = 0 ', () => {
    const arrayMock = []
    expect(queryParamsController.checkNumberOfParams(arrayMock)).toBe(false)
  })
  test('Returns false if the array size > 3 ', () => {
    const arrayMock = ['tomato', 'onions', 'avocado', 'watermelon']
    expect(queryParamsController.checkNumberOfParams(arrayMock)).toBe(false)
  })
})
