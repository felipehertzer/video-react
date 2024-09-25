import React from 'react';
import { render } from '@testing-library/react';
import Video from '../components/Video';

describe('Video', () => {
  it('should render with "video" tag', () => {
    const { container } = render(<Video actions={{}} player={{}} />);

    // Check if the rendered element is a video tag
    const videoElement = container.querySelector('video');
    expect(videoElement).toBeInTheDocument();
  });

  it('should render with "video-react-video" class', () => {
    const { container } = render(<Video actions={{}} player={{}} />);

    // Check if the video element has the "video-react-video" class
    const videoElement = container.querySelector('video.video-react-video');
    expect(videoElement).toBeInTheDocument();
  });
});
