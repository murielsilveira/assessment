const decimals = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}

function numberToPhrase(number) {
  if (typeof(number) !== 'number')
    return 'Unknown number'
  return decimals[number]
}

module.exports = numberToPhrase
