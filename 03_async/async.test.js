const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
  test('should return value async', async() => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  // Проверка на получение ошибки
  test('should catch error with promise', async() => {
    try {
      await Ajax.echo()
    } catch (error) {
      expect(error.message).toBe('error')
    }
    
  })

  // То же самое, но с промисами
  test('should return value with promise', () => {
    return Ajax.echo('some data').then( data => {
      expect(data).toBe('some data')
    })
  })

  test('should catch error with promise', () => {
    return Ajax.echo().catch( error => {
      expect(error).toBeInstanceOf(Error)
    })
  })


})


describe('Ajax: GET', () => {

  let response
  let todos

  beforeEach(() => {
    todos = [
      {id: 1, title: 'TOdo 1', completed: false}
    ]

    response = {
      data: {
        todos
      }
    }
  })

  test('should data from backend', () => {

    // Отлавливаем гет запрос
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
})