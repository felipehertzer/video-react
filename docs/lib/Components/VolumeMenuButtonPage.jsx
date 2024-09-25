import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import VolumeMenuButtonExample from '../examples/VolumeMenuButton.jsx'
import VolumeMenuButtonExampleSource from '../examples/VolumeMenuButton.jsx?raw'

export default class VolumeMenuButtonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="VolumeMenuButton" />
        <h3>VolumeMenuButton</h3>
        <p>Button for volume popup.</p>
        <div className="docs-example">
          <VolumeMenuButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {VolumeMenuButtonExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`VolumeMenuButton.propTypes = {

  // The direction where Volume Bar popup
  // default: false
  vertical: PropTypes.bool,

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
