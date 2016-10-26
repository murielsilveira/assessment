const expect = require('chai').expect
const numberToPhrase = require('./number-to-phrase').numberToPhrase

describe('when converting a number to a phrase', function(){
  it('should not parse non numbers', function(){
    expect(numberToPhrase('A')).to.equal('unknown number')
    expect(numberToPhrase(',')).to.equal('unknown number')
    expect(numberToPhrase('√')).to.equal('unknown number')
    expect(numberToPhrase('')).to.equal('unknown number')
    expect(numberToPhrase({})).to.equal('unknown number')
    expect(numberToPhrase([])).to.equal('unknown number')
    expect(numberToPhrase(function(){})).to.equal('unknown number')
    expect(numberToPhrase(undefined)).to.equal('unknown number')
    expect(numberToPhrase(null)).to.equal('unknown number')
    expect(numberToPhrase(false)).to.equal('unknown number')
    expect(numberToPhrase(true)).to.equal('unknown number')
  })

  it('should not parse float numbers', function(){
    expect(numberToPhrase(1.1)).to.equal('unknown number')
    expect(numberToPhrase('1.1')).to.equal('unknown number')
    expect(numberToPhrase('-1.1')).to.equal('unknown number')
  })

  it('should parse negative numbers', function(){
    expect(numberToPhrase(-10)).to.equal('minus ten')
    expect(numberToPhrase('-9000')).to.equal('minus nine thousand')
  })

  it('should parse numbers as string', function(){
    expect(numberToPhrase('10')).to.equal('ten')
    expect(numberToPhrase('100.00')).to.equal('one hundred')
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

  it('should parse numbers between 20 and 29', function(){
    expect(numberToPhrase(20)).to.equal('twenty')
    expect(numberToPhrase(21)).to.equal('twenty-one')
    expect(numberToPhrase(22)).to.equal('twenty-two')
    expect(numberToPhrase(23)).to.equal('twenty-three')
    expect(numberToPhrase(24)).to.equal('twenty-four')
    expect(numberToPhrase(25)).to.equal('twenty-five')
    expect(numberToPhrase(26)).to.equal('twenty-six')
    expect(numberToPhrase(27)).to.equal('twenty-seven')
    expect(numberToPhrase(28)).to.equal('twenty-eight')
    expect(numberToPhrase(29)).to.equal('twenty-nine')
  })

  it('should parse numbers between 30 and 39', function(){
    expect(numberToPhrase(30)).to.equal('thirty')
    expect(numberToPhrase(31)).to.equal('thirty-one')
    expect(numberToPhrase(32)).to.equal('thirty-two')
    expect(numberToPhrase(33)).to.equal('thirty-three')
    expect(numberToPhrase(34)).to.equal('thirty-four')
    expect(numberToPhrase(35)).to.equal('thirty-five')
    expect(numberToPhrase(36)).to.equal('thirty-six')
    expect(numberToPhrase(37)).to.equal('thirty-seven')
    expect(numberToPhrase(38)).to.equal('thirty-eight')
    expect(numberToPhrase(39)).to.equal('thirty-nine')
  })

  it('should parse numbers between 40 and 49', function(){
    expect(numberToPhrase(40)).to.equal('forty')
    expect(numberToPhrase(41)).to.equal('forty-one')
    expect(numberToPhrase(42)).to.equal('forty-two')
    expect(numberToPhrase(43)).to.equal('forty-three')
    expect(numberToPhrase(44)).to.equal('forty-four')
    expect(numberToPhrase(45)).to.equal('forty-five')
    expect(numberToPhrase(46)).to.equal('forty-six')
    expect(numberToPhrase(47)).to.equal('forty-seven')
    expect(numberToPhrase(48)).to.equal('forty-eight')
    expect(numberToPhrase(49)).to.equal('forty-nine')
  })

  it('should parse numbers between 50 and 59', function(){
    expect(numberToPhrase(50)).to.equal('fifty')
    expect(numberToPhrase(51)).to.equal('fifty-one')
    expect(numberToPhrase(52)).to.equal('fifty-two')
    expect(numberToPhrase(53)).to.equal('fifty-three')
    expect(numberToPhrase(54)).to.equal('fifty-four')
    expect(numberToPhrase(55)).to.equal('fifty-five')
    expect(numberToPhrase(56)).to.equal('fifty-six')
    expect(numberToPhrase(57)).to.equal('fifty-seven')
    expect(numberToPhrase(58)).to.equal('fifty-eight')
    expect(numberToPhrase(59)).to.equal('fifty-nine')
  })

  it('should parse numbers between 60 and 69', function(){
    expect(numberToPhrase(60)).to.equal('sixty')
    expect(numberToPhrase(61)).to.equal('sixty-one')
    expect(numberToPhrase(62)).to.equal('sixty-two')
    expect(numberToPhrase(63)).to.equal('sixty-three')
    expect(numberToPhrase(64)).to.equal('sixty-four')
    expect(numberToPhrase(65)).to.equal('sixty-five')
    expect(numberToPhrase(66)).to.equal('sixty-six')
    expect(numberToPhrase(67)).to.equal('sixty-seven')
    expect(numberToPhrase(68)).to.equal('sixty-eight')
    expect(numberToPhrase(69)).to.equal('sixty-nine')
  })

  it('should parse numbers between 70 and 79', function(){
    expect(numberToPhrase(70)).to.equal('seventy')
    expect(numberToPhrase(71)).to.equal('seventy-one')
    expect(numberToPhrase(72)).to.equal('seventy-two')
    expect(numberToPhrase(73)).to.equal('seventy-three')
    expect(numberToPhrase(74)).to.equal('seventy-four')
    expect(numberToPhrase(75)).to.equal('seventy-five')
    expect(numberToPhrase(76)).to.equal('seventy-six')
    expect(numberToPhrase(77)).to.equal('seventy-seven')
    expect(numberToPhrase(78)).to.equal('seventy-eight')
    expect(numberToPhrase(79)).to.equal('seventy-nine')
  })

  it('should parse numbers between 80 and 89', function(){
    expect(numberToPhrase(80)).to.equal('eighty')
    expect(numberToPhrase(81)).to.equal('eighty-one')
    expect(numberToPhrase(82)).to.equal('eighty-two')
    expect(numberToPhrase(83)).to.equal('eighty-three')
    expect(numberToPhrase(84)).to.equal('eighty-four')
    expect(numberToPhrase(85)).to.equal('eighty-five')
    expect(numberToPhrase(86)).to.equal('eighty-six')
    expect(numberToPhrase(87)).to.equal('eighty-seven')
    expect(numberToPhrase(88)).to.equal('eighty-eight')
    expect(numberToPhrase(89)).to.equal('eighty-nine')
  })

  it('should parse numbers between 90 and 99', function(){
    expect(numberToPhrase(90)).to.equal('ninety')
    expect(numberToPhrase(91)).to.equal('ninety-one')
    expect(numberToPhrase(92)).to.equal('ninety-two')
    expect(numberToPhrase(93)).to.equal('ninety-three')
    expect(numberToPhrase(94)).to.equal('ninety-four')
    expect(numberToPhrase(95)).to.equal('ninety-five')
    expect(numberToPhrase(96)).to.equal('ninety-six')
    expect(numberToPhrase(97)).to.equal('ninety-seven')
    expect(numberToPhrase(98)).to.equal('ninety-eight')
    expect(numberToPhrase(99)).to.equal('ninety-nine')
  })

  it('should parse numbers between 100 and 999', function(){
    expect(numberToPhrase(100)).to.equal('one hundred')
    expect(numberToPhrase(200)).to.equal('two hundred')
    expect(numberToPhrase(300)).to.equal('three hundred')
    expect(numberToPhrase(400)).to.equal('four hundred')
    expect(numberToPhrase(500)).to.equal('five hundred')
    expect(numberToPhrase(600)).to.equal('six hundred')
    expect(numberToPhrase(700)).to.equal('seven hundred')
    expect(numberToPhrase(800)).to.equal('eight hundred')
    expect(numberToPhrase(900)).to.equal('nine hundred')
    expect(numberToPhrase(101)).to.equal('one hundred and one')
    expect(numberToPhrase(209)).to.equal('two hundred and nine')
    expect(numberToPhrase(310)).to.equal('three hundred and ten')
    expect(numberToPhrase(411)).to.equal('four hundred and eleven')
    expect(numberToPhrase(515)).to.equal('five hundred and fifteen')
    expect(numberToPhrase(619)).to.equal('six hundred and nineteen')
    expect(numberToPhrase(720)).to.equal('seven hundred and twenty')
    expect(numberToPhrase(855)).to.equal('eight hundred and fifty-five')
    expect(numberToPhrase(999)).to.equal('nine hundred and ninety-nine')
  })

  it('should parse numbers between 1,000 and 9,999', function(){
    expect(numberToPhrase(1000)).to.equal('one thousand')
    expect(numberToPhrase(2001)).to.equal('two thousand and one')
    expect(numberToPhrase(3010)).to.equal('three thousand and ten')
    expect(numberToPhrase(4015)).to.equal('four thousand and fifteen')
    expect(numberToPhrase(5021)).to.equal('five thousand and twenty-one')
    expect(numberToPhrase(6500)).to.equal('six thousand five hundred')
    expect(numberToPhrase(7610)).to.equal('seven thousand six hundred and ten')
    expect(numberToPhrase(8755)).to.equal('eight thousand seven hundred and fifty-five')
    expect(numberToPhrase(9999)).to.equal('nine thousand nine hundred and ninety-nine')
  })

  it('should parse numbers between 10,000 and 99,999', function(){
    expect(numberToPhrase(10000)).to.equal('ten thousand')
    expect(numberToPhrase(20001)).to.equal('twenty thousand and one')
    expect(numberToPhrase(31010)).to.equal('thirty-one thousand and ten')
    expect(numberToPhrase(43056)).to.equal('forty-three thousand and fifty-six')
    expect(numberToPhrase(55500)).to.equal('fifty-five thousand five hundred')
    expect(numberToPhrase(67608)).to.equal('sixty-seven thousand six hundred and eight')
    expect(numberToPhrase(70717)).to.equal('seventy thousand seven hundred and seventeen')
    expect(numberToPhrase(88880)).to.equal('eighty-eight thousand eight hundred and eighty')
    expect(numberToPhrase(99999)).to.equal('ninety-nine thousand nine hundred and ninety-nine')
  })

  it('should parse numbers between 100,000 and 999,999', function(){
    expect(numberToPhrase(100000)).to.equal('one hundred thousand')
    expect(numberToPhrase(200001)).to.equal('two hundred thousand and one')
    expect(numberToPhrase(310015)).to.equal('three hundred and ten thousand and fifteen')
    expect(numberToPhrase(456000)).to.equal('four hundred and fifty-six thousand')
    expect(numberToPhrase(500400)).to.equal('five hundred thousand four hundred')
    expect(numberToPhrase(640450)).to.equal('six hundred and forty thousand four hundred and fifty')
    expect(numberToPhrase(765432)).to.equal('seven hundred and sixty-five thousand four hundred and thirty-two')
    expect(numberToPhrase(888880)).to.equal('eight hundred and eighty-eight thousand eight hundred and eighty')
    expect(numberToPhrase(999999)).to.equal('nine hundred and ninety-nine thousand nine hundred and ninety-nine')
  })

  it('should parse numbers between 1,000,000 and 999,999,999', function(){
    expect(numberToPhrase(1000000)).to.equal('one million')
    expect(numberToPhrase(2000003)).to.equal('two million and three')
    expect(numberToPhrase(3400050)).to.equal('three million four hundred thousand and fifty')
    expect(numberToPhrase(45670800)).to.equal('forty-five million six hundred and seventy thousand eight hundred')
    expect(numberToPhrase(500600777)).to.equal('five hundred million six hundred thousand seven hundred and seventy-seven')
    expect(numberToPhrase(600000000)).to.equal('six hundred million')
    expect(numberToPhrase(780000000)).to.equal('seven hundred and eighty million')
    expect(numberToPhrase(800900101)).to.equal('eight hundred million nine hundred thousand one hundred and one')
    expect(numberToPhrase(999999999)).to.equal('nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine')
  })

  it('should parse numbers between 1,000,000,000 and 999,999,999,999', function(){
    expect(numberToPhrase(1000000000)).to.equal('one billion')
    expect(numberToPhrase(2000000001)).to.equal('two billion and one')
    expect(numberToPhrase(10002000000)).to.equal('ten billion two million')
    expect(numberToPhrase(21030004000)).to.equal('twenty-one billion thirty million four thousand')
    expect(numberToPhrase(300000000000)).to.equal('three hundred billion')
    expect(numberToPhrase(444000000123)).to.equal('four hundred and forty-four billion one hundred and twenty-three')
    expect(numberToPhrase(500600000000)).to.equal('five hundred billion six hundred million')
    expect(numberToPhrase(999999999999)).to.equal('nine hundred and ninety-nine billion nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine')
  })

  it('should parse numbers between 1,000,000,000,000 and 999,999,999,999,999', function(){
    expect(numberToPhrase(1000000000000)).to.equal('one trillion')
    expect(numberToPhrase(20000000000000)).to.equal('twenty trillion')
    expect(numberToPhrase(300000000000000)).to.equal('three hundred trillion')
    expect(numberToPhrase(999999999999999)).to.equal('nine hundred and ninety-nine trillion nine hundred and ninety-nine billion nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine')
  })

  it('should give a friendly message for numbers larger than the supported', function(){
    expect(numberToPhrase(1000000000000000)).to.equal("oh, that's a big number, I don't know it yet!")
  })
})
