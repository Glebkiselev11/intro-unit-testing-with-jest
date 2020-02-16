const {sum, nativeNull} = require('./intro')

// В describe мы можем объединять тысты для отдельной функции
describe('Sum function: ', () => {
  
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toEqual(4)
  })
  
  test('should return value correctly comparing to other values', () => {
    expect(sum(2, 3)).toBeGreaterThan(4) // Проверяет, чтобы была больше чем 4
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5) // Проверяет, чтобы была больше или равно
    expect(sum(2, 3)).toBeLessThan(6) // Быть меньше чем
    expect(sum(2, 3)).toBeLessThanOrEqual(5) // Быть меньше чем или равно
  })
  
  test('should sum 2 float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})


describe('Native null function: ', () => {
  
  test('should return false value null', () => {
    expect(nativeNull()).toBe(null) // Эти два теста одинаково праверяют на null
    expect(nativeNull()).toBeNull() // Этим вариантом пользоваться предпочтительней
    
    expect(nativeNull()).toBeFalsy() // Проверяет что результат является отрицательным
    expect(nativeNull()).toBeDefined() // Проверяет что значение определено, то бишь не undefined
    
    expect(nativeNull()).not.toBeTruthy() // Приставка not делает реверсию как например знак '!'
    

  })

})


