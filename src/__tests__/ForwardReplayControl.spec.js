import React from 'react'
import { render } from '@testing-library/react'
import ForwardReplayControl from '../components/control-bar/ForwardReplayControl'

describe('ForwardReplayControl', () => {
  it('should render with "button" tag', () => {
    const ForwardControl = ForwardReplayControl('forward')
    const { container } = render(<ForwardControl actions={{}} player={{}} />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-control video-react-button" class', () => {
    const ForwardControl = ForwardReplayControl('forward')
    const { container } = render(<ForwardControl actions={{}} player={{}} />)

    const buttonElement = container.querySelector(
      'button.video-react-control.video-react-button',
    )
    expect(buttonElement).toBeInTheDocument()
  })
})
