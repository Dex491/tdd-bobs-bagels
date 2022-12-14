const Basket = require('../src/basket.js')
// const { inventory } = require('../inventory.json')

describe('Basket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })

  it('should add a bagel/item to the basket', () => {
    const expected = {
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion'
    }

    const result = basket.addBagel('BGLO')

    expect(result).toEqual([expected])
  })

  it('should return an error when the basket is full and user tries adding more', () => {
    const basketContents = ['BGLO', 'BGLP', 'BGLE']
    basketContents.forEach((bagel) => basket.addBagel(bagel))

    const result = basket.addBagel('BGSS')

    expect(() => {
      basket.addBagel(result).toThrowError('Your basket is full')
    })
  })

  it('should allow the user to change the basket limit to a given number', () => {
    const basketContents = ['BGLO', 'BGLP', 'BGLE']
    const expected = basket.addBagel('BGSE')
    basketContents.forEach((bagel) => basket.addBagel(bagel))

    basket.basketSize = 6

    const result = basket.addBagel('BGSE')

    expect(result).toEqual(expected)
  })
})
