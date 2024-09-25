import React from 'react'
import { render } from '@testing-library/react'
import PosterImage from '../components/PosterImage'

describe('PosterImage', () => {
  it('should render as a "div" tag', () => {
    const { container } = render(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false,
        }}
      />,
    )

    // Check if the rendered element is a div
    const divElement = container.querySelector('div')
    expect(divElement).toBeInTheDocument()
  })

  it('should render with "video-react-poster" class', () => {
    const { container } = render(
      <PosterImage
        poster="poster.png"
        player={{
          hasStarted: false,
        }}
      />,
    )

    // Check if the div has the "video-react-poster" class
    const divElement = container.querySelector('div.video-react-poster')
    expect(divElement).toBeInTheDocument()
  })
})
