import React from 'react'
import { PrismCode } from 'react-prism'
import {Helmet} from 'react-helmet-async'
import PlayerWithCaptions from '../examples/PlayerWithCaptions.jsx'

import PlayerWithCaptionsSource from '../examples/PlayerWithCaptions.jsx?raw'

export default function CaptionedVideoPage() {
  return (
    <div>
      <Helmet title="ClosedCaptionButton" />
      <h3>ClosedCaptionButton</h3>
      <p>
        There is an example on how to add a ClosedCaption button component into{' '}
        <code>Video-React</code> Player.
      </p>
      <div className="docs-example">
        <PlayerWithCaptions />
      </div>
      <p />
      <h4>ClosedCaptionButton</h4>
      <pre>
        <PrismCode className="language-jsx">
          {PlayerWithCaptionsSource}
        </PrismCode>
      </pre>
    </div>
  )
}
