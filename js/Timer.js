import Sounds from './Sound.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        updateDisplay()
        resetControls()
        Sounds().endTimer()
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
    hold()
  }

  function decrease() {
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
    if (minutes <= 4) {
      minutes = 0
      updateDisplay(0, 0)
    }
  }

  function addition() {
    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
    if (minutes < 0) {
      updateDisplay(0, 0)
    }
  }

  return {
    updateDisplay,
    updateMinutes,
    hold,
    countdown,
    resetTimer,
    decrease,
    addition
  }
}
