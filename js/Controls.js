export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {
  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }
    return newMinutes
  }

  function turnItOff(button) {
    if (button.classList.contains('active')) {
      button.classList.remove('active')
    }
  }

  return {
    play,
    pause,
    resetControls,
    getMinutes,
    turnItOff
  }
}
