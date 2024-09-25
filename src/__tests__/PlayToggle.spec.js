import React from 'react'
import { render } from '@testing-library/react'
import PlayToggle from '../components/control-bar/PlayToggle'

describe('PlayToggle', () => {
  it('should render with "button" tag', () => {
    const { container } = render(
      <PlayToggle
        actions={{}}
        player={{
          paused: false,
        }}
      />,
    )

    // Check if the rendered element is a button
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-button" class', () => {
    const { container } = render(
      <PlayToggle
        actions={{}}
        player={{
          paused: false,
        }}
      />,
    )

    // Ensure the button has the "video-react-button" class
    const buttonElement = container.querySelector('button.video-react-button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-paused" class when video has been paused', () => {
    const { container } = render(
      <PlayToggle
        actions={{}}
        player={{
          paused: true,
        }}
      />,
    )

    // Ensure the button has the "video-react-paused" class when the video is paused
    const buttonElement = container.querySelector('button.video-react-paused')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-playing" class when video has been playing', () => {
    const { container } = render(
      <PlayToggle
        actions={{}}
        player={{
          paused: false,
        }}
      />,
    )

    // Ensure the button has the "video-react-playing" class when the video is playing
    const buttonElement = container.querySelector('button.video-react-playing')
    expect(buttonElement).toBeInTheDocument()
  })
})
