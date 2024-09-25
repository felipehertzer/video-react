import React from 'react';
import { render } from '@testing-library/react';
import ReplayControl from '../components/control-bar/ReplayControl';

describe('ReplayControl', () => {
  it('should render with "button" tag', () => {
    const { container } = render(<ReplayControl actions={{}} player={{}} />);

    // Check if the rendered element is a button
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with "video-react-button" class', () => {
    const { container } = render(<ReplayControl actions={{}} player={{}} />);

    // Check if the button has the "video-react-button" class
    const buttonElement = container.querySelector('button.video-react-button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with "video-react-replay-control" class', () => {
    const { container } = render(
        <ReplayControl mode="replay" actions={{}} player={{}} />
    );

    // Check if the button has the "video-react-replay-control" class
    const buttonElement = container.querySelector('button.video-react-replay-control');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with "video-react-icon-replay-5" class for replay 5 seconds', () => {
    const { container } = render(
        <ReplayControl seconds={5} actions={{}} player={{}} />
    );

    // Check if the button has the "video-react-icon-replay-5" class
    const buttonElement = container.querySelector('button.video-react-icon-replay-5');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with "video-react-icon-replay-10" class for replay 10 seconds', () => {
    const { container } = render(
        <ReplayControl seconds={10} actions={{}} player={{}} />
    );

    // Check if the button has the "video-react-icon-replay-10" class
    const buttonElement = container.querySelector('button.video-react-icon-replay-10');
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render with "video-react-icon-replay-30" class for replay 30 seconds', () => {
    const { container } = render(
        <ReplayControl seconds={30} actions={{}} player={{}} />
    );

    // Check if the button has the "video-react-icon-replay-30" class
    const buttonElement = container.querySelector('button.video-react-icon-replay-30');
    expect(buttonElement).toBeInTheDocument();
  });
});
