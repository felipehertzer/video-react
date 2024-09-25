import React from 'react'
import { render, screen } from '@testing-library/react'
import BigPlayButton from '../components/BigPlayButton'

describe('BigPlayButton', () => {
  it('should render with "button" tag', () => {
    render(
      <BigPlayButton
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        }}
      />,
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement.tagName.toLowerCase()).toBe('button')
  })

  it('should hide if video has been started', () => {
    render(
      <BigPlayButton
        player={{
          hasStarted: true,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        }}
      />,
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('big-play-button-hide')
  })

  it('should render with "video-react-big-play-button" class', () => {
    render(
      <BigPlayButton
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        }}
      />,
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('video-react-big-play-button')
  })

  it('should render with "video-react-big-play-button-center" class with center position', () => {
    render(
      <BigPlayButton
        position="center"
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        }}
      />,
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveClass('video-react-big-play-button-center')
  })
})
