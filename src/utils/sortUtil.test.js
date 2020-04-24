const sortUtil = require('./sortUtils')

describe('alphabeticalSort', () => {
  test('Should return ordered array', () => {
    const unOderderedSimpleArray = ['z', 's', 'a', 'b']
    const orderedSimpleArray = sortUtil.alphabeticalSort(unOderderedSimpleArray)
    expect(orderedSimpleArray).toEqual(['a', 'b', 's', 'z'])
  })
})
