import React from 'react';
import { render } from '@testing-library/react';
import FullscreenToggle from '../components/control-bar/FullscreenToggle';

describe('FullscreenToggle', () => {
    it('should render with "button" tag', () => {
        const { container } = render(
            <FullscreenToggle
                actions={{}}
                player={{
                    isFullscreen: false,
                }}
            />
        );

        const buttonElement = container.querySelector('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render with "video-react-fullscreen-control" class', () => {
        const { container } = render(
            <FullscreenToggle
                actions={{}}
                player={{
                    isFullscreen: false,
                }}
            />
        );

        const buttonElement = container.querySelector('button.video-react-fullscreen-control');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render with "video-react-icon-fullscreen-exit" class when player is full screen', () => {
        const { container } = render(
            <FullscreenToggle
                actions={{}}
                player={{
                    isFullscreen: true,
                }}
            />
        );

        const buttonElement = container.querySelector('button.video-react-icon-fullscreen-exit');
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render with "video-react-icon-fullscreen" class when player exits full screen', () => {
        const { container } = render(
            <FullscreenToggle
                actions={{}}
                player={{
                    isFullscreen: false,
                }}
            />
        );

        const buttonElement = container.querySelector('button.video-react-icon-fullscreen');
        expect(buttonElement).toBeInTheDocument();
    });
});
