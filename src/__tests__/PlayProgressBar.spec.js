import React from 'react'
import { render } from '@testing-library/react'
import PlayProgressBar from '../components/control-bar/PlayProgressBar'

describe('PlayProgressBar', () => {
  it('should render with "div" tag', () => {
    const { container } = render(
      <PlayProgressBar currentTime={10} duration={1000} />,
    )

    // Check if a div with the class "video-react-play-progress" is rendered
    const divElement = container.querySelector('div.video-react-play-progress')
    expect(divElement).toBeInTheDocument()
  })

  it('should render with "video-react-play-progress" class', () => {
    const { container } = render(
      <PlayProgressBar currentTime={10} duration={1000} />,
    )

    // Ensure the div has the "video-react-play-progress" class
    const divElement = container.querySelector('div.video-react-play-progress')
    expect(divElement).toHaveClass('video-react-play-progress')
  })

  it('should render children when passed in', () => {
    const { container } = render(
      <PlayProgressBar currentTime={10} duration={1000}>
        <div>Child Element</div>
      </PlayProgressBar>,
    )

    // Check if the PlayProgressBar renders children
    const childElement = container.querySelector(
      'div.video-react-play-progress > div',
    )
    expect(childElement).toBeInTheDocument()
  })
})
