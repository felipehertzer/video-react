import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import BigPlayButtonExample from '../examples/BigPlayButton.jsx'
import BigPlayButtonExampleSource from '../examples/BigPlayButton.jsx?raw'

export default class BigPlayButtonPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="BigPlayButton" />
        <h3>BigPlayButton</h3>
        <p>
          Initial play button. Shows before the video has played. The hiding of
          the big play button is done via CSS and player states.
        </p>
        <div className="docs-example">
          <BigPlayButtonExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {BigPlayButtonExampleSource}
          </PrismCode>
        </pre>
        <form>
          <div className="form-group">
            <label htmlFor="exampleTextarea">Example textarea</label>
            <textarea className="form-control" id="exampleTextarea" rows="3" />
          </div>
        </form>
        <h4>Properties</h4>
        <pre>
          <PrismCode className="language-jsx">
            {`BigPlayButton.propTypes = {

  // The default position is left-top,
  // another position is 'center'
  // it has a css named \`video-react-big-play-button-$\{position\}\`
  // default: 'left'
  position: PropTypes.string,

}`}
          </PrismCode>
        </pre>
      </div>
    )
  }
}
