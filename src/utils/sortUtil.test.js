const sortUtil = require('./sortUtil')

describe('Sorting util', () => {
  test('Returns ordered array', () => {
    const unOderderedSimpleArray = ['z', 's', 'a', 'b']
    const orderedSimpleArray = sortUtil.alphabeticalSort(unOderderedSimpleArray)
    expect(orderedSimpleArray).toEqual(['a', 'b', 's', 'z'])
  })
})
