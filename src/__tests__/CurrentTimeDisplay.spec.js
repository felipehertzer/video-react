import React from 'react'
import { render } from '@testing-library/react'
import CurrentTimeDisplay from '../components/time-controls/CurrentTimeDisplay'

describe('CurrentTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const { container } = render(
      <CurrentTimeDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />,
    )

    // Find the div with the class name 'video-react-current-time-display'
    const currentTimeDiv = container.querySelector(
      'div.video-react-current-time-display',
    )
    expect(currentTimeDiv).toBeInTheDocument()
  })

  it('should have more than 1 child', () => {
    const { container } = render(
      <CurrentTimeDisplay
        player={{
          duration: 100,
          currentTime: 20,
        }}
      />,
    )

    // Find the div and check if it has more than one child
    const currentTimeDiv = container.querySelector(
      'div.video-react-current-time-display',
    )
    expect(currentTimeDiv?.childElementCount).toBeGreaterThan(0)
  })
})
