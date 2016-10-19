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

  it('0 should be: zero', function(){
    expect(numberToPhrase(0)).to.equal('zero')
  })

  it('1 should be: one', function(){
    expect(numberToPhrase(1)).to.equal('one')
  })

  it('2 should be: two', function(){
    expect(numberToPhrase(2)).to.equal('two')
  })

  it('3 should be: three', function(){
    expect(numberToPhrase(3)).to.equal('three')
  })

  it('4 should be: four', function(){
    expect(numberToPhrase(4)).to.equal('four')
  })

  it('5 should be: five', function(){
    expect(numberToPhrase(5)).to.equal('five')
  })

  it('6 should be: six', function(){
    expect(numberToPhrase(6)).to.equal('six')
  })

  it('7 should be: seven', function(){
    expect(numberToPhrase(7)).to.equal('seven')
  })

  it('8 should be: eight', function(){
    expect(numberToPhrase(8)).to.equal('eight')
  })

  it('9 should be: nine', function(){
    expect(numberToPhrase(9)).to.equal('nine')
  })
})
