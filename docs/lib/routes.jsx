import Home from './Home/index.jsx';
import Components from './Components/index.jsx';
import PlayerPage from './Components/PlayerPage.jsx';
import ShortcutPage from './Components/ShortcutPage.jsx';
import BigPlayButtonPage from './Components/BigPlayButtonPage.jsx';
import PosterImagePage from './Components/PosterImagePage.jsx';
import LoadingSpinnerPage from './Components/LoadingSpinnerPage.jsx';
import ControlBarPage from './Components/ControlBarPage.jsx';
import PlayTogglePage from './Components/PlayTogglePage.jsx';
import ForwardControlPage from './Components/ForwardControlPage.jsx';
import ReplayControlPage from './Components/ReplayControlPage.jsx';
import VolumeMenuButtonPage from './Components/VolumeMenuButtonPage.jsx';
import PlaybackRateMenuButtonPage from './Components/PlaybackRateMenuButtonPage.jsx';
import CaptionedVideoPage from './Components/CaptionedVideoPage.jsx';
import Customize from './Customize/index.jsx';
import EnableDisableComponentPage from './Customize/EnableDisableComponentPage.jsx';
import CustomizeComponentPage from './Customize/CustomizeComponentPage.jsx';
import CustomizeSourcePage from './Customize/CustomizeSourcePage.jsx';
import NotFound from './NotFound/index.jsx';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/index.html', element: <Home /> },
  {
    path: '/components',
    element: <Components />, // Parent route
    children: [
      { path: 'player', element: <PlayerPage /> }, // Child routes
      { path: 'shortcut', element: <ShortcutPage /> },
      { path: 'big-play-button', element: <BigPlayButtonPage /> },
      { path: 'poster-image', element: <PosterImagePage /> },
      { path: 'loading-spinner', element: <LoadingSpinnerPage /> },
      { path: 'control-bar', element: <ControlBarPage /> },
      { path: 'play-toggle', element: <PlayTogglePage /> },
      { path: 'forward-control', element: <ForwardControlPage /> },
      { path: 'replay-control', element: <ReplayControlPage /> },
      { path: 'volume-menu-button', element: <VolumeMenuButtonPage /> },
      { path: 'playback-rate-menu-button', element: <PlaybackRateMenuButtonPage /> },
      { path: 'captioned-video', element: <CaptionedVideoPage /> },
    ],
  },
  {
    path: '/customize',
    element: <Customize />, // Parent route for customization
    children: [
      { path: 'enable-disable-components', element: <EnableDisableComponentPage /> },
      { path: 'customize-component', element: <CustomizeComponentPage /> },
      { path: 'customize-source', element: <CustomizeSourcePage /> },
    ],
  },
  { path: '*', element: <NotFound /> }, // Catch-all route for 404
];

export default routes;
