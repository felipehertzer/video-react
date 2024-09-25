import React from 'react'
import { render, screen } from '@testing-library/react'
import Player from '../components/Player.jsx'
import Bezel from '../components/Bezel.jsx'

describe('Bezel', () => {
  it('should not render bezel by default', () => {
    render(
      <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <Bezel />
      </Player>,
    )

    // Use queryBy to check if the element exists and assert its absence
    const bezelElement = screen.queryByRole('status', {
      className: 'video-react-bezel',
    })

    expect(bezelElement).toBeNull()
  })
})
