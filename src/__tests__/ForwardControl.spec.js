import React from 'react'
import { render } from '@testing-library/react'
import ForwardControl from '../components/control-bar/ForwardControl'

describe('ForwardControl', () => {
  it('should render with "button" tag', () => {
    const { container } = render(<ForwardControl actions={{}} player={{}} />)

    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-button" class', () => {
    const { container } = render(<ForwardControl actions={{}} player={{}} />)

    const buttonElement = container.querySelector('button.video-react-button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-forward-control" class', () => {
    const { container } = render(<ForwardControl actions={{}} player={{}} />)

    const buttonElement = container.querySelector(
      'button.video-react-forward-control',
    )
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-icon-forward-5" class for forward 5 seconds', () => {
    const { container } = render(
      <ForwardControl seconds={5} actions={{}} player={{}} />,
    )

    const buttonElement = container.querySelector(
      'button.video-react-icon-forward-5',
    )
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-icon-forward-10" class for forward 10 seconds', () => {
    const { container } = render(
      <ForwardControl seconds={10} actions={{}} player={{}} />,
    )

    const buttonElement = container.querySelector(
      'button.video-react-icon-forward-10',
    )
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render with "video-react-icon-forward-30" class for forward 30 seconds', () => {
    const { container } = render(
      <ForwardControl seconds={30} actions={{}} player={{}} />,
    )

    const buttonElement = container.querySelector(
      'button.video-react-icon-forward-30',
    )
    expect(buttonElement).toBeInTheDocument()
  })
})
