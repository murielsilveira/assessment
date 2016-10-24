;(function(exports){
  const zeroToNineteen = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
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
  const largeNumbersNotation = [
    {
      value: 1000000000000,
      phrase: 'trillion'
    },
    {
      value: 1000000000,
      phrase: 'billion'
    },
    {
      value: 1000000,
      phrase: 'million'
    },
    {
      value: 1000,
      phrase: 'thousand'
    }
  ]

  function numberToPhrase(number) {
    if (isInvalid(number))
      return 'Unknown number'

    number = parseInt(number)

    let phrase = ''

    for (var i = 0; i < largeNumbersNotation.length; i++) {
      const largeNumber = largeNumbersNotation[i]
      if (number < largeNumber.value)
        continue

      const largestMultiple = Math.floor(number / largeNumber.value)
      const remaining = number % largeNumber.value

      number = remaining
      phrase += parseLessThanOneThousand(largestMultiple)
      phrase += ' '
      phrase += largeNumber.phrase

      if (number > 0) {
        phrase += ' '
      }
    }

    phrase += parseLessThanOneThousand(number, phrase)
    return phrase
  }

  function isInvalid(number) {
    const asInt = parseInt(number)
    const asFloat = parseFloat(number)
    const isFloat = asInt !== asFloat
    const isNegative = asInt < 0

    return isFloat || isNegative
  }

  function parseLessThanOneThousand(number, currentPhrase) {
    let phrase = ''

    if (number >= 100) {
      const hundredth = Math.floor(number / 100)
      const hundredthRest = number % 100

      number = hundredthRest
      phrase += zeroToNineteen[hundredth] + ' hundred'
      if (number > 0) {
        phrase += ' '
      }
    }

    if ((phrase || currentPhrase) && number > 0)
      phrase += 'and '

    if (number >= 20) {
      const tenth = Math.floor(number / 10)
      const tenthRest = number % 10

      number = tenthRest
      phrase += tens[tenth]
      if (number > 0)
        phrase += '-'
    }

    if ((phrase || currentPhrase) && number === 0)
      return phrase
    return phrase + zeroToNineteen[number]
  }

  exports.numberToPhrase = numberToPhrase
})(typeof window !== 'undefined' ? window : exports)
