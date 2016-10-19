const expect = require('chai').expect
const numberToPhrase = require('./number-to-phrase')

describe('number to phrase tests', function(){
  it('1 should be: one', function(){
    expect(numberToPhrase(1)).to.equal('one')
  })
})
