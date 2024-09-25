import React from 'react';
import { render } from '@testing-library/react';
import Player from '../components/Player';

describe('Player', () => {
  it('should render as a "div" tag', () => {
    const { container } = render(
        <Player source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    );

    // Ensure the component renders a div element
    const divElement = container.querySelector('div');
    expect(divElement).toBeInTheDocument();
  });

  it('should render with "video-react" class', () => {
    const { container } = render(
        <Player source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    );

    // Ensure the div has the class "video-react"
    const divElement = container.querySelector('div.video-react');
    expect(divElement).toBeInTheDocument();
  });

  it('should set width as "100%" and height as "auto"', () => {
    const { container } = render(
        <Player
            source="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            fluid={false}
            width="100%"
            height="auto"
        />
    );

    // Ensure the div with class "video-react" has the correct styles
    const divElement = container.querySelector('div.video-react');
    expect(divElement).toHaveStyle({ width: '100%', height: 'auto' });
  });
});
