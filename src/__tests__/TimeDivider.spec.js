import React from 'react'
import { render } from '@testing-library/react'
import TimeDivider from '../components/time-controls/TimeDivider'

describe('TimeDivider', () => {
  it('should render with "div" tag and correct class', () => {
    const { container } = render(<TimeDivider separator="-" />)

    // Check if a div with the class "video-react-time-divider" is rendered
    const divElement = container.querySelector('div.video-react-time-divider')
    expect(divElement).toBeInTheDocument()
  })

  it('should have more than 1 child', () => {
    const { container } = render(<TimeDivider separator=":" />)

    // Check if the component has children
    const divElement = container.querySelector('div.video-react-time-divider')
    expect(divElement?.children.length).toBeGreaterThan(0)
  })
})
