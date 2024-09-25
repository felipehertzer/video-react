import Player from './components/Player.jsx'
import Video from './components/Video.jsx'
import BigPlayButton from './components/BigPlayButton.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import PosterImage from './components/PosterImage.jsx'
import Slider from './components/Slider.jsx'
import Bezel from './components/Bezel.jsx'
import Shortcut from './components/Shortcut.jsx'

import ControlBar from './components/control-bar/ControlBar.jsx'
import PlayToggle from './components/control-bar/PlayToggle.jsx'
import ForwardControl from './components/control-bar/ForwardControl.jsx'
import ReplayControl from './components/control-bar/ReplayControl.jsx'
import FullscreenToggle from './components/control-bar/FullscreenToggle.jsx'
import ProgressControl from './components/control-bar/ProgressControl.jsx'
import SeekBar from './components/control-bar/SeekBar.jsx'
import PlayProgressBar from './components/control-bar/PlayProgressBar.jsx'
import LoadProgressBar from './components/control-bar/LoadProgressBar.jsx'
import MouseTimeDisplay from './components/control-bar/MouseTimeDisplay.jsx'
import VolumeMenuButton from './components/control-bar/VolumeMenuButton.jsx'
import PlaybackRateMenuButton from './components/control-bar/PlaybackRateMenuButton.jsx'
import PlaybackRate from './components/control-bar/PlaybackRate.jsx'
import ClosedCaptionButton from './components/control-bar/ClosedCaptionButton.jsx'

import RemainingTimeDisplay from './components/time-controls/RemainingTimeDisplay.jsx'
import CurrentTimeDisplay from './components/time-controls/CurrentTimeDisplay.jsx'
import DurationDisplay from './components/time-controls/DurationDisplay.jsx'
import TimeDivider from './components/time-controls/TimeDivider.jsx'

import MenuButton from './components/menu/MenuButton.jsx'

import * as playerActions from './actions/player'
import * as videoActions from './actions/video'
import { playerReducer, operationReducer } from './reducers'

export {
  Player,
  Video,
  BigPlayButton,
  LoadingSpinner,
  PosterImage,
  Bezel,
  Shortcut,
  ControlBar,
  PlayToggle,
  ForwardControl,
  ReplayControl,
  FullscreenToggle,
  ProgressControl,
  SeekBar,
  Slider,
  PlayProgressBar,
  LoadProgressBar,
  MouseTimeDisplay,
  RemainingTimeDisplay,
  CurrentTimeDisplay,
  DurationDisplay,
  TimeDivider,
  VolumeMenuButton,
  PlaybackRateMenuButton,
  ClosedCaptionButton,
  PlaybackRate,
  MenuButton,
  playerActions,
  videoActions,
  playerReducer,
  operationReducer,
}
