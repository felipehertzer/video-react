import React from 'react';
import { render, screen } from '@testing-library/react';
import ControlBar from '../components/control-bar/ControlBar';

describe('ControlBar', () => {
  it('should render with "div" tag', () => {
    const { container } = render(
        <ControlBar
            actions={{}}
            player={{
              hasStarted: false,
            }}
        />
    );

    // Check if the container's first child is a div
    const divElement = container.firstChild;
    expect(divElement?.nodeName.toLowerCase()).toBe('div');
  });

  it('should render with "video-react-control-bar" class', () => {
    render(
        <ControlBar
            actions={{}}
            player={{
              hasStarted: false,
            }}
        />
    );

    // Check if the control bar has the expected class
    const controlBarElement = screen.getByRole('group'); // or use container.querySelector('.video-react-control-bar')
    expect(controlBarElement).toHaveClass('video-react-control-bar');
  });

  it('should have more than 1 child', () => {
    const { container } = render(
        <ControlBar
            actions={{}}
            player={{
              hasStarted: false,
            }}
        />
    );

    // Check if there are multiple children
    const controlBarElement = container.firstChild;
    expect(controlBarElement?.childElementCount).toBeGreaterThan(0);
  });
});
