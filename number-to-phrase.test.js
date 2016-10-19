const expect = require('chai').expect
const numberToPhrase = require('./number-to-phrase')

describe('number to phrase tests', function(){
  it('should parse only numbers', function(){
    expect(numberToPhrase('A')).to.equal('Unknown number')
  })

  it('1 should be: one', function(){
    expect(numberToPhrase(1)).to.equal('one')
  })
})
