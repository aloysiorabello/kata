import { OddEvenPrime, integerType } from './oddEvenPrime'

describe('oddEvenPrime class', () => {
  test('should correctly classify an integer as odd', () => {
    const n1 = new OddEvenPrime(7)
    const ret = n1.oddOrEven()
    expect(ret).toEqual(integerType.ODD)
  })

  test('should correctly classify an integer as even', () => {
    const n1 = new OddEvenPrime(4)
    const ret = n1.oddOrEven()
    expect(ret).toEqual(integerType.EVEN)
  })

  test('should correctly classify an integer as prime', () => {
    const n1 = new OddEvenPrime(5)
    const ret = n1.prime()
    expect(ret).toEqual(true)
  })

  test('should correctly classify one as prime', () => {
    const n1 = new OddEvenPrime(1)
    const ret = n1.classify()
    expect(ret).toEqual(integerType.PRIME)
  })

  test('should correctly classify two as prime', () => {
    const n1 = new OddEvenPrime(2)
    const ret = n1.classify()
    expect(ret).toEqual(integerType.PRIME)
  })

  test('should correctly classify three as prime', () => {
    const n1 = new OddEvenPrime(3)
    const ret = n1.classify()
    expect(ret).toEqual(integerType.PRIME)
  })

  test('should correctly classify four as even', () => {
    const n1 = new OddEvenPrime(4)
    const ret = n1.classify()
    expect(ret).toEqual(integerType.EVEN)
  })

  test('should correctly classify seven as odd', () => {
    const n1 = new OddEvenPrime(9)
    const ret = n1.classify()
    expect(ret).toEqual(integerType.ODD)
  })
})
