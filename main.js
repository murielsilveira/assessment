var form = document.querySelector('.form')
var number = document.querySelector('.number')
var phrase = document.querySelector('.phrase')
var mute = document.querySelector('.mute')

var isSpeechActive = false
if (window.speechSynthesis) {
  isSpeechActive = true
  mute.classList.add('speech-active')
}

form.addEventListener('submit', onSubmitForm)
mute.addEventListener('click', onMuteClicked)
number.focus()

function onSubmitForm(event){
  var numberAsPhrase = numberToPhrase(number.value)
  phrase.innerHTML = numberAsPhrase

  if (isSpeechActive) {
    speechSynthesis.cancel()
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(numberAsPhrase)
    )
  }

  event.preventDefault()
  return false
}

function onMuteClicked(event) {
  if (mute.classList.contains('muted')) {
    mute.classList.remove('muted')
    isSpeechActive = true
  } else {
    mute.classList.add('muted')
    isSpeechActive = false
    speechSynthesis.cancel()
  }

  event.preventDefault()
}
