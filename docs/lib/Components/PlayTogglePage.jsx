import React from 'react'
import { PrismCode } from 'react-prism'
import Helmet from 'react-helmet'
import PlayToggleExample from '../examples/PlayToggle.jsx'
import PlayToggleExampleSource from '../examples/PlayToggle.jsx?raw'

export default class PlayTogglePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="PlayToggle" />
        <h3>PlayToggle</h3>
        <p>A button component to toggle between play and pause.</p>
        <div className="docs-example">
          <PlayToggleExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PlayToggleExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`PlayToggle.propTypes = {

// no customizable properties,

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
