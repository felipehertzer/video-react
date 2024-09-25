import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MenuItem from '../components/menu/MenuItem'

const items = [1, 2, 3, 4].map((i) => ({
  label: `item${i}`,
  value: `item${i}`,
}))

describe('MenuItem', () => {
  it('should render as an "li" element', () => {
    const { container } = render(<MenuItem item={items[0]} index={0} />)

    // Check if the component is rendered as an <li> element
    const listItem = container.querySelector('li')
    expect(listItem).toBeInTheDocument()
  })

  it('should call onSelectItem after click', () => {
    const handleSelectItem = jest.fn()

    render(
      <MenuItem item={items[0]} index={0} onSelectItem={handleSelectItem} />,
    )

    // Ensure the menu item is rendered
    const menuItem = screen.getByRole('menuitem')

    // Simulate a click on the menu item
    fireEvent.click(menuItem)

    // Verify the onSelectItem handler was called
    expect(handleSelectItem).toHaveBeenCalled()
  })
})
