const isEven = require('./isEven');

describe("Is even tests", () => {
    test('Check if number 23896 is even:', () => {
        expect(isEven(23896)).toBe(true)
    })

    test('Check if number 3 is even:', () => {
        expect(isEven(3)).toBe(false)
    })
    
    test('Check if number 6 is even:', () => {
        expect(isEven(6)).not.toBeFalsy()
    })
})


