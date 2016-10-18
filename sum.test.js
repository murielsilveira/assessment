const assert = require('chai').assert
const sum = require('./sum')

describe('sum tests', function(){
  it('2 + 2 should be 4', function(){
    assert.equal(4, sum(2, 2))
  })
})
