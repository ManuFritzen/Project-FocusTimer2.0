import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonAddition,
  buttonDecrease,
  buttonCard1,
  buttonCard2,
  buttonCard3,
  buttonCard4
} from './Elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.resetControls()
    timer.resetTimer()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    sound.pressButton()
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      controls.resetTimer()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateDisplay(newMinutes)
  })

  buttonAddition.addEventListener('click', function addition() {
    timer.addition()
    sound.pressButton()
  })

  buttonDecrease.addEventListener('click', function () {
    timer.decrease()
    sound.pressButton()
  })

  buttonCard1.addEventListener('click', function () {
    buttonCard1.classList.toggle('active')
    controls.turnItOff(buttonCard2)
    controls.turnItOff(buttonCard3)
    controls.turnItOff(buttonCard4)
    sound.music()
  })

  buttonCard2.addEventListener('click', function () {
    buttonCard2.classList.toggle('active')
    controls.turnItOff(buttonCard1)
    controls.turnItOff(buttonCard3)
    controls.turnItOff(buttonCard4)
    sound.music()
  })

  buttonCard3.addEventListener('click', function () {
    buttonCard3.classList.toggle('active')
    controls.turnItOff(buttonCard1)
    controls.turnItOff(buttonCard2)
    controls.turnItOff(buttonCard4)
    sound.music()
  })

  buttonCard4.addEventListener('click', function () {
    buttonCard4.classList.toggle('active')
    controls.turnItOff(buttonCard1)
    controls.turnItOff(buttonCard2)
    controls.turnItOff(buttonCard3)
    sound.music()
  })
}
