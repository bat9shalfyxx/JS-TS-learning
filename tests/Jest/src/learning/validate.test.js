const isEven = require('./validate')

test('Check if number 23896 is even:', () => {
    expect(isEven(23896)).toBe(true)
})

test('Check if number 6 is even:', () => {
    expect(isEven(6)).toBe(true)
})

