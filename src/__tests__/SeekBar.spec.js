import React from 'react'
import { render } from '@testing-library/react'
import SeekBar from '../components/control-bar/SeekBar'

describe('SeekBar', () => {
  it('should render with "div" tag', () => {
    const { container } = render(
      <SeekBar
        actions={{}}
        player={{
          duration: 200,
          currentTime: 50,
        }}
        mouseTime={{
          time: 100,
          position: 0,
        }}
      />,
    )

    // Check if a div with the class "video-react-slider" is rendered
    const divElement = container.querySelector('div.video-react-slider')
    expect(divElement).toBeInTheDocument()
  })

  it('should render with "video-react-progress-holder" class', () => {
    const { container } = render(
      <SeekBar
        actions={{}}
        player={{
          duration: 200,
          currentTime: 50,
        }}
        mouseTime={{
          time: 100,
          position: 0,
        }}
      />,
    )

    // Check if the div has the class "video-react-progress-holder"
    const divElement = container.querySelector(
      'div.video-react-progress-holder',
    )
    expect(divElement).toBeInTheDocument()
  })
})
