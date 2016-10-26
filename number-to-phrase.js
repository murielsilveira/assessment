;(function(exports){
  var zeroToNineteen = {
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
  var tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  }
  var largeNumbersNotation = [
    { value: 1000000000000, phrase: 'trillion' },
    { value: 1000000000, phrase: 'billion' },
    { value: 1000000, phrase: 'million' },
    { value: 1000, phrase: 'thousand' }
  ]
  var largestNumberSupported = 999999999999999

  function numberToPhrase(number) {
    if (isInvalid(number))
      return 'unknown number'

    number = parseInt(number)
    var numberIsNegative = false
    var phrase = ''

    if (number > largestNumberSupported) {
      return "oh, that's a big number"
    }

    if (number < 0) {
      numberIsNegative = true
      number = Math.abs(number)
    }

    for (var i = 0; i < largeNumbersNotation.length; i++) {
      var largeNumber = largeNumbersNotation[i]
      if (number < largeNumber.value)
        continue

      var largestMultiple = Math.floor(number / largeNumber.value)
      var remaining = number % largeNumber.value

      number = remaining
      phrase += parseLessThanOneThousand(largestMultiple)
      phrase += ' '
      phrase += largeNumber.phrase

      if (number > 0) {
        phrase += ' '
      }
    }

    phrase += parseLessThanOneThousand(number, phrase)
    if (numberIsNegative)
      return 'minus ' + phrase
    return phrase
  }

  function isInvalid(number) {
    var isFloat = parseInt(number) !== parseFloat(number)
    return isFloat
  }

  function parseLessThanOneThousand(number, currentPhrase) {
    var phrase = ''

    if (number >= 100) {
      var largestMultiple = Math.floor(number / 100)
      var remaining = number % 100

      number = remaining
      phrase += zeroToNineteen[largestMultiple] + ' hundred'
      if (number > 0) {
        phrase += ' '
      }
    }

    if ((phrase || currentPhrase) && number > 0)
      phrase += 'and '

    if (number >= 20) {
      var largestMultiple = Math.floor(number / 10)
      var remaining = number % 10

      number = remaining
      phrase += tens[largestMultiple]
      if (number > 0)
        phrase += '-'
    }

    if ((phrase || currentPhrase) && number === 0)
      return phrase
    return phrase + zeroToNineteen[number]
  }

  exports.numberToPhrase = numberToPhrase
})(typeof window !== 'undefined' ? window : exports)
