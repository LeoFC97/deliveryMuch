const queryParamsController = require('./queryParamsController')

describe('query ParamsController ', () => {
  test('Should split the query and return an array', () => {
    const originalQuery = 'tomato,onions,avocado'
    const array = queryParamsController.splitQueryIntoArray(originalQuery)
    expect(array).toEqual(['tomato', 'onions', 'avocado'])
  })
})
