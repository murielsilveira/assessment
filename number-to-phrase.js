const zeroToNine = {
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
const tenToNineteen = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}
const tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

function numberToPhrase(number) {
  if (typeof(number) !== 'number')
    return 'Unknown number'

  if (number < 20)
    return zeroToNine[number] || tenToNineteen[number]

  const tenth = Math.floor(number / 10)
  const tenthRest = number % 10

  let phrase = tens[tenth]
  if (tenthRest > 0)
    phrase += '-' + zeroToNine[tenthRest]

  return phrase
}

module.exports = numberToPhrase
