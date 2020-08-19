export enum integerType {
  PRIME = 1,
  ODD,
  EVEN
}

export class OddEvenPrime {
  private readonly integer: number

  constructor (integer: number) {
    this.integer = integer
  }

  prime (): boolean {
    for (var index: number = 2; index < this.integer - 1; index++) {
      if (this.integer % index === 0) {
        return false
      }
    }
    return true
  }

  oddOrEven (): integerType {
    if (this.integer % 2 === 0) {
      return integerType.EVEN
    } else {
      return integerType.ODD
    }
  }

  classify (): integerType {
    if (this.prime()) {
      return integerType.PRIME
    } else {
      return this.oddOrEven()
    }
  }
}
