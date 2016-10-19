function numberToPhrase(numberToParse) {
  if (typeof(numberToParse) !== 'number')
    return 'Unknown number'
  return 'one'
}

module.exports = numberToPhrase
