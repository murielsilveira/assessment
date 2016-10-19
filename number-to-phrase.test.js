const expect = require('chai').expect
const numberToPhrase = require('./number-to-phrase')

describe('number to phrase tests', function(){
  it('should not parse non numbers', function(){
    expect(numberToPhrase('A')).to.equal('Unknown number')
    expect(numberToPhrase(',')).to.equal('Unknown number')
    expect(numberToPhrase('√')).to.equal('Unknown number')
    expect(numberToPhrase('')).to.equal('Unknown number')
    expect(numberToPhrase({})).to.equal('Unknown number')
    expect(numberToPhrase([])).to.equal('Unknown number')
    expect(numberToPhrase(function(){})).to.equal('Unknown number')
    expect(numberToPhrase(undefined)).to.equal('Unknown number')
    expect(numberToPhrase(null)).to.equal('Unknown number')
    expect(numberToPhrase(false)).to.equal('Unknown number')
    expect(numberToPhrase(true)).to.equal('Unknown number')
  })

  it('1 should be: one', function(){
    expect(numberToPhrase(1)).to.equal('one')
  })
})
