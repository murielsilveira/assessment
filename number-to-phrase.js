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
  const isNotANumber = typeof(number) !== 'number'
  const isFloat = number !== Math.floor(number)
  const isNegative = number < 0

  if (isNotANumber || isFloat || isNegative)
    return 'Unknown number'

  let phrase = ''

  if (number >= 100) {
    const hundredth = Math.floor(number / 100)
    const hundredthRest = number % 100

    number = hundredthRest

    phrase = zeroToNine[hundredth] + ' hundred'
    if (hundredthRest > 0)
      phrase += ' and '
  }

  if (number <= 19) {
    if (phrase && number === 0)
      return phrase
    return phrase + (zeroToNine[number] || tenToNineteen[number])
  }

  const tenth = Math.floor(number / 10)
  const tenthRest = number % 10

  phrase += tens[tenth]
  if (tenthRest > 0)
    phrase += '-' + zeroToNine[tenthRest]

  return phrase
}

module.exports = numberToPhrase
