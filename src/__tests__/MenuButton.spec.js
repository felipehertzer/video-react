import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClickableComponent from '../components/ClickableComponent';
import MenuButton from '../components/menu/MenuButton';

const items = [1, 2, 3, 4].map((i) => ({
  label: `item${i}`,
  value: `item${i}`,
}));

describe('ClosedCaptionButton', () => {
  it('should render with "ClickableComponent" tag', () => {
    const { container } = render(
        <MenuButton items={items} selectedIndex={0}>
          <span className="video-react-control-text">Button</span>
        </MenuButton>
    );

    // Check if the component renders inside a ClickableComponent
    const clickableComponent = container.querySelector('button');
    expect(clickableComponent).toBeInTheDocument();
  });

  it('should show menu items after click', () => {
    render(
        <MenuButton items={items} selectedIndex={0}>
          <span className="video-react-control-text">Button</span>
        </MenuButton>
    );

    // Ensure menu items are not visible initially
    expect(screen.queryAllByRole('menuitem').length).toBe(0);

    // Find the menu button and click it
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Now the menu items should be visible
    expect(screen.getAllByRole('menuitem').length).toBe(4);
  });
});
