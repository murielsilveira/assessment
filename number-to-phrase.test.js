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

  it('should parse numbers between 0 and 19', function(){
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
    expect(numberToPhrase(10)).to.equal('ten')
    expect(numberToPhrase(11)).to.equal('eleven')
    expect(numberToPhrase(12)).to.equal('twelve')
    expect(numberToPhrase(13)).to.equal('thirteen')
    expect(numberToPhrase(14)).to.equal('fourteen')
    expect(numberToPhrase(15)).to.equal('fifteen')
    expect(numberToPhrase(16)).to.equal('sixteen')
    expect(numberToPhrase(17)).to.equal('seventeen')
    expect(numberToPhrase(18)).to.equal('eighteen')
    expect(numberToPhrase(19)).to.equal('nineteen')
  })

  it('20 should be: twenty', function(){
    expect(numberToPhrase(20)).to.equal('twenty')
  })

  it('21 should be: twenty-one', function(){
    expect(numberToPhrase(21)).to.equal('twenty-one')
  })
})
