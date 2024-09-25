import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import EnableDisableComponentExample from '../examples/EnableDisableComponent.jsx'
import EnableDisableComponentExampleSource from '../examples/EnableDisableComponent.jsx?raw'

export default class EnableDisableComponentPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Enable & disable default components" />
        <h3>Enable & Disable Default Components</h3>
        <p>The components can be enabled or disabled.</p>
        <div className="docs-example">
          <EnableDisableComponentExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {EnableDisableComponentExampleSource}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
