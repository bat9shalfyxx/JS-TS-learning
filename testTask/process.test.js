const process = require('./process.mjs')
const testCasesArray = require('./index.mjs')

const processReturns = (store, order) => {
    if(process(store, order)) {
        return true
    } else {
        return false
    }
}
for(let i = 0; i < testCasesArray.length; i++) {
    test(`Проверка кейса №${i}:`, () => {
        expect(processReturns(testCasesArray[i].store, testCasesArray[i].order))
        .toBe(testCasesArray[i].isPossible)
    })
}

