const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {

  // Объявляем переменные через let
  let array

  // Хук который запускается перед каждым тестом
  // Такие манипуляции нужны, чтобы перед кажыдым тестом мы работали с чистыми данным
  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello']
  })

  // Хук который запускается после всех тестов
  afterAll(() => {
    _ = new Lodash() 
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined() // Эти две проверки аналогичны друг другу
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    const result = [42, true, 'hello']
    expect(_.compact(array)).toEqual(result) // Массивы или объекты сравниваем через toEqual
  })

  test('should NOT contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false) // Проверяем через реверсию, что массив не должен содержать фалси значение
    expect(_.compact(array)).not.toContain(null)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
  })

})

describe('Lodash: groupBy', () => {
  
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined() // Эти две проверки аналогичны друг другу
  })

  test('should grup array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }

    expect(_.groupBy(array, Math.floor)).toEqual(result)
  })

  test('should grup array items by length', () => {
    const array = ['one', 'two', 'three']
    const result = {
      5: ['three'],
      3: ['one', 'two']
    }

    expect(_.groupBy(array, 'length')).toEqual(result)
  })

  test('should Not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array) // Провяем что результат не должен быть массивом
  })

})