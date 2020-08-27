import { isValid } from './identifier'

describe('identifier validator', () => {
  test('Should correctly classify this string as valid silly pascal identifier:', () => {
    const ret = isValid('a1234')
    expect(ret).toEqual(true)
  })

  test('Should`t classify number start string as a silly parcal identifier', () => {
    const ret = isValid('1234')
    expect(ret).toEqual(false)
  })

  test('Should`t classify a special caracter as a silly pascal identifier', () => {
    const ret = isValid('a12^34')
    expect(ret).toEqual(false)
  })

  test('Should correctly classify something', () => {
    const ret = isValid('')
    expect(ret).toEqual(false)
  })

  test('Big string', () => {
    const ret = isValid('a1234567a')
    expect(ret).toEqual(false)
  })

  test('null', () => {
    const ret = isValid(null)
    expect(ret).toEqual(false)
  })

  test('tam 01', () => {
    const ret = isValid('a')
    expect(ret).toEqual(true)
  })

  test('tam 06', () => {
    const ret = isValid('a12345')
    expect(ret).toEqual(true)
  })
})
