import { isValid } from './identifier'

describe('identifier validator', () => {
  test('Should correctly classify this string as valid silly pascal identifier:', () => {
    const ret = isValid('a1234')
    expect(ret).toEqual(true)
  })

  test('Shouldn`t classify number start string as a silly parcal identifier:', () => {
    const ret = isValid('1234')
    expect(ret).toEqual(false)
  })

  test('Shouldn`t classify a special caracter String as a silly pascal identifier:', () => {
    const ret = isValid('a12^34')
    expect(ret).toEqual(false)
  })

  test('Shouldn`t classify a empty String as a silly pascal identifier:', () => {
    const ret = isValid('')
    expect(ret).toEqual(false)
  })

  test('Shouldn`t classify a big String as a silly pascal identifier:', () => {
    const ret = isValid('a1234567a')
    expect(ret).toEqual(false)
  })

  test('Shouldn`t classify a null String as a silly pascal identifier:', () => {
    const ret = isValid(null)
    expect(ret).toEqual(false)
  })

  test('Should correctly classify one char string as valid silly pascal identifier:', () => {
    const ret = isValid('a')
    expect(ret).toEqual(true)
  })

  test('Should correctly classify a six char string as valid silly pascal identifier:', () => {
    const ret = isValid('a12345')
    expect(ret).toEqual(true)
  })
})
