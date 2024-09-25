import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
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

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="index.html" component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="player/" />
      <Route path="player/" component={PlayerPage} />
      <Route path="shortcut/" component={ShortcutPage} />
      <Route path="big-play-button/" component={BigPlayButtonPage} />
      <Route path="poster-image/" component={PosterImagePage} />
      <Route path="loading-spinner/" component={LoadingSpinnerPage} />
      <Route path="control-bar/" component={ControlBarPage} />
      <Route path="play-toggle/" component={PlayTogglePage} />
      <Route path="forward-control/" component={ForwardControlPage} />
      <Route path="replay-control/" component={ReplayControlPage} />
      <Route path="volume-menu-button/" component={VolumeMenuButtonPage} />
      <Route
        path="playback-rate-menu-button/"
        component={PlaybackRateMenuButtonPage}
      />
      <Route path="captioned-video" component={CaptionedVideoPage} />
    </Route>
    <Route path="/customize/" component={Customize}>
      <IndexRedirect to="enable-disable-components/" />
      <Route
        path="enable-disable-components/"
        component={EnableDisableComponentPage}
      />
      <Route path="customize-component/" component={CustomizeComponentPage} />
      <Route path="customize-source/" component={CustomizeSourcePage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)

export default routes
