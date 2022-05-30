import Controls from './Controls.js'
import Timer from './Timer.js'
import Sound from './Sound.js'
import Events from './Events.js'
import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from './Elements.js'

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.resetControls
})

const sound = Sound()

Events({ controls, timer, sound })
