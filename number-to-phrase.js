function numberToPhrase(numberToParse) {
  if (!isNumber(numberToParse))
    return 'Unknown number'
  return 'one'
}

function isNumber(number) {
  return typeof(number) === 'number'
}

module.exports = numberToPhrase
