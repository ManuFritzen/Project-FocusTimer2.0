import {
  buttonCard1,
  buttonCard2,
  buttonCard3,
  buttonCard4
} from './Elements.js'

export default function () {
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
  return {
    pressButton,
    endTimer,
    music
  }
}
