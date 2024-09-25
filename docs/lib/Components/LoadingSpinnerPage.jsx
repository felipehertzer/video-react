import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import LoadingSpinnerExample from '../examples/LoadingSpinner.jsx'
import LoadingSpinnerExampleSource from '../examples/LoadingSpinner.jsx?raw'

export default class LoadingSpinnerPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="LoadingSpinner" />
        <h3>LoadingSpinner</h3>
        <p>
          There would be a loading spinner to display before the video is
          loaded.
        </p>
        <div className="docs-example">
          <LoadingSpinnerExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {LoadingSpinnerExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`LoadingSpinner.propTypes = {

  // no customizable properties

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
