import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './Home/index.jsx'
import NotFound from './NotFound/index.jsx'
import Components from './Components/index.jsx'
import UI from './UI/index.jsx'
import PlayerPage from './Components/PlayerPage.jsx'
import ShortcutPage from './Components/ShortcutPage.jsx'
import BigPlayButtonPage from './Components/BigPlayButtonPage.jsx'
import PosterImagePage from './Components/PosterImagePage.jsx'
import LoadingSpinnerPage from './Components/LoadingSpinnerPage.jsx'
import ControlBarPage from './Components/ControlBarPage.jsx'
import PlayTogglePage from './Components/PlayTogglePage.jsx'
import ForwardControlPage from './Components/ForwardControlPage.jsx'
import ReplayControlPage from './Components/ReplayControlPage.jsx'
import VolumeMenuButtonPage from './Components/VolumeMenuButtonPage.jsx'
import PlaybackRateMenuButtonPage from './Components/PlaybackRateMenuButtonPage.jsx'
import CaptionedVideoPage from './Components/CaptionedVideoPage.jsx'
import Customize from './Customize/index.jsx'
import EnableDisableComponentPage from './Customize/EnableDisableComponentPage.jsx'
import CustomizeComponentPage from './Customize/CustomizeComponentPage.jsx'
import CustomizeSourcePage from './Customize/CustomizeSourcePage.jsx'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UI.Layout />}>
        <Route index element={<Home />} />
        <Route path="index.html" element={<Home />} />
        <Route path="components" element={<Components />}>
          <Route index element={<Navigate to="player" replace />} />
          <Route path="player" element={<PlayerPage />} />
          <Route path="shortcut" element={<ShortcutPage />} />
          <Route path="big-play-button" element={<BigPlayButtonPage />} />
          <Route path="poster-image" element={<PosterImagePage />} />
          <Route path="loading-spinner" element={<LoadingSpinnerPage />} />
          <Route path="control-bar" element={<ControlBarPage />} />
          <Route path="play-toggle" element={<PlayTogglePage />} />
          <Route path="forward-control" element={<ForwardControlPage />} />
          <Route path="replay-control" element={<ReplayControlPage />} />
          <Route path="volume-menu-button" element={<VolumeMenuButtonPage />} />
          <Route
            path="playback-rate-menu-button"
            element={<PlaybackRateMenuButtonPage />}
          />
          <Route path="captioned-video" element={<CaptionedVideoPage />} />
        </Route>
        <Route path="customize" element={<Customize />}>
          <Route
            index
            element={<Navigate to="enable-disable-components" replace />}
          />
          <Route
            path="enable-disable-components"
            element={<EnableDisableComponentPage />}
          />
          <Route
            path="customize-component"
            element={<CustomizeComponentPage />}
          />
          <Route path="customize-source" element={<CustomizeSourcePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
)

export default AppRoutes
