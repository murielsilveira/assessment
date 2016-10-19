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

  it('should parse decimals', function(){
    expect(numberToPhrase(0)).to.equal('zero')
    expect(numberToPhrase(1)).to.equal('one')
    expect(numberToPhrase(2)).to.equal('two')
    expect(numberToPhrase(3)).to.equal('three')
    expect(numberToPhrase(4)).to.equal('four')
    expect(numberToPhrase(5)).to.equal('five')
    expect(numberToPhrase(6)).to.equal('six')
    expect(numberToPhrase(7)).to.equal('seven')
    expect(numberToPhrase(8)).to.equal('eight')
    expect(numberToPhrase(9)).to.equal('nine')
  })
})
