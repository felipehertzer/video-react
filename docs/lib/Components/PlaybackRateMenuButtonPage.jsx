import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import PlaybackRateMenuButtonExample from '../examples/PlaybackRateMenuButton.jsx'
import PlaybackRateMenuButtonExampleSource from '../examples/PlaybackRateMenuButton.jsx?raw'

export default class PlaybackRateMenuButtonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PlaybackRateMenuButton" />
        <h3>PlaybackRateMenuButton</h3>
        <p>The dropdown menu to control the playback rates.</p>
        <div className="docs-example">
          <PlaybackRateMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlaybackRateMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`PlaybackRateMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: [2, 1.5, 1.25, 1, 0.5, 0.25]
  rates: PropTypes.array,

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
