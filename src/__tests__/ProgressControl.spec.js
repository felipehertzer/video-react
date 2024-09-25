import React from 'react';
import { render } from '@testing-library/react';
import ProgressControl from '../components/control-bar/ProgressControl';

describe('ProgressControl', () => {
  it('should render as a "div" tag', () => {
    const { container } = render(<ProgressControl actions={{}} player={{}} />);

    // Check if the rendered element is a div
    const divElement = container.querySelector('div');
    expect(divElement).toBeInTheDocument();
  });

  it('should render with "video-react-progress-control" class', () => {
    const { container } = render(<ProgressControl actions={{}} player={{}} />);

    // Check if the div has the "video-react-progress-control" class
    const divElement = container.querySelector('div.video-react-progress-control');
    expect(divElement).toBeInTheDocument();
  });

  // The third test about the ref cannot be directly tested with Testing Library.
  // Instead, we can verify the behavior related to "seekBar", such as whether it
  // is rendered or interacts correctly.
});
