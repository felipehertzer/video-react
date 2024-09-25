import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Slider from '../components/Slider'

describe('Slider', () => {
  it('should render with "div" tag', () => {
    const { container } = render(<Slider actions={{}} player={{}} />)

    // Check if the rendered element is a div
    const divElement = container.querySelector('div')
    expect(divElement).toBeInTheDocument()
  })

  it('should render with "video-react-slider" class', () => {
    const { container } = render(<Slider actions={{}} player={{}} />)

    // Check if the div has the "video-react-slider" class
    const divElement = container.querySelector('div.video-react-slider')
    expect(divElement).toBeInTheDocument()
  })

  it('simulates click events', () => {
    const e = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    }
    const onClick = jest.fn()
    const { container } = render(
      <Slider actions={{}} player={{}} onClick={onClick} />,
    )

    // Simulate click event on the div
    const divElement = container.querySelector('div')
    fireEvent.click(divElement, e)

    // Check if the event handlers are called
    expect(e.preventDefault).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalled()
  })

  it('should render children when passed in', () => {
    const { container } = render(
      <Slider player={{}}>
        <div>Child Element</div>
      </Slider>,
    )

    // Check if the children are rendered
    const childElement = container.querySelector('div > div')
    expect(childElement).toBeInTheDocument()
  })
})
