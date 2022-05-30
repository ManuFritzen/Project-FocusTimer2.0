//VARIÁVEIS / ELEMENTOS

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonSet = document.querySelector('.set')
const buttonStop = document.querySelector('.stop')
const buttonAddition = document.querySelector('.addition')
const buttonDecrease = document.querySelector('.decrease')
const buttonCard1 = document.querySelector('.card1')
const buttonCard2 = document.querySelector('.card2')
const buttonCard3 = document.querySelector('.card3')
const buttonCard4 = document.querySelector('.card4')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
const card1Audio = new Audio(
  'https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true'
)
const card2Audio = new Audio(
  'https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true'
)
const card3Audio = new Audio(
  'https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true'
)
const card4Audio = new Audio(
  'https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true'
)
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

// FUNÇÕES DOS SONS

function pressButton() {
  buttonPressAudio.play()
}

function endTimer() {
  kitchenTimer.play()
}

function music() {
  buttonCard1.classList.contains('active')
    ? card1Audio.play()
    : card1Audio.pause()
  buttonCard2.classList.contains('active')
    ? card2Audio.play()
    : card2Audio.pause()
  buttonCard3.classList.contains('active')
    ? card3Audio.play()
    : card3Audio.pause()
  buttonCard4.classList.contains('active')
    ? card4Audio.play()
    : card4Audio.pause()
}

// FUNÇÕES DECONTROLE DO TIMER E BUTTONS

function getMinutes() {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    return false
  }
  return newMinutes
}

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      updateDisplay()
      resetControls()
      endTimer()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, seconds - 1)

    countdown()
  }, 1000)
}

function resetTimer() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function turnItOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}

// EVENTOS / INTERAÇÃO COM USUÁRIO

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
  pressButton()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  clearTimeout(timerTimeOut)
  pressButton()
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()

  pressButton()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = getMinutes()
  if (!newMinutes) {
    resetTimer()
    return
  }
  minutes = newMinutes
  updateDisplay(newMinutes, 0)
})

buttonAddition.addEventListener('click', function () {
  minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  if (minutes <= 0) {
    updateDisplay(0, 0)
  }
  pressButton()
})

buttonDecrease.addEventListener('click', function () {
  minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  if (minutes <= 0) {
    minutes = 0
    updateDisplay(0, 0)
  }
  pressButton()
})

buttonCard1.addEventListener('click', function () {
  buttonCard1.classList.toggle('active')
  turnItOff(buttonCard2)
  turnItOff(buttonCard3)
  turnItOff(buttonCard4)
  music()
})

buttonCard2.addEventListener('click', function () {
  buttonCard2.classList.toggle('active')
  turnItOff(buttonCard1)
  turnItOff(buttonCard3)
  turnItOff(buttonCard4)
  music()
})

buttonCard3.addEventListener('click', function () {
  buttonCard3.classList.toggle('active')
  turnItOff(buttonCard1)
  turnItOff(buttonCard2)
  turnItOff(buttonCard4)
  music()
})

buttonCard4.addEventListener('click', function () {
  buttonCard4.classList.toggle('active')
  turnItOff(buttonCard1)
  turnItOff(buttonCard2)
  turnItOff(buttonCard3)
  music()
})
