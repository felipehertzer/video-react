import React from 'react'
import { render } from '@testing-library/react'
import LoadProgressBar from '../components/control-bar/LoadProgressBar'

describe('LoadProgressBar', () => {
  it('should render with "div" tag', () => {
    const { container } = render(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {},
        }}
        duration={1000}
      />,
    )

    // Check if a div with class "video-react-load-progress" is rendered
    const divElement = container.querySelector('div.video-react-load-progress')
    expect(divElement).toBeInTheDocument()
  })

  it('should render with "video-react-load-progress" class', () => {
    const { container } = render(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {},
        }}
        duration={1000}
      />,
    )

    // Check if the div has the class "video-react-load-progress"
    const divElement = container.querySelector('div.video-react-load-progress')
    expect(divElement).toHaveClass('video-react-load-progress')
  })

  it('should render children when passed in', () => {
    const { container } = render(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {},
        }}
        duration={1000}
      >
        <div>Child Element</div>
      </LoadProgressBar>,
    )

    // Check if the component has children
    const childElement = container.querySelector('div')
    expect(childElement?.children.length).toBeGreaterThan(0)
  })
})
