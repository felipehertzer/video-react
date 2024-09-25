import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import ForwardControlExample from '../examples/ForwardControl.jsx'

import ForwardControlExampleSource from '../examples/ForwardControl.jsx?raw'

export default class ForwardControlPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="ForwardControl" />
        <h3>ForwardControl</h3>
        <p>A button in control bar to go forward 5/10/30 seconds.</p>
        <div className="docs-example">
          <ForwardControlExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {ForwardControlExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`ForwardControl.propTypes = {

  // How many seconds to go forward
  // default: 10
  seconds: PropTypes.oneOf([5, 10, 30]),

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
