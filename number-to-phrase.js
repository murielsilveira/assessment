function numberToPhrase(numberToParse) {
  if (typeof(numberToParse) !== 'number')
    return 'Unknown number'

  if (numberToParse === 2)
    return 'two'
  return 'one'
}

module.exports = numberToPhrase
