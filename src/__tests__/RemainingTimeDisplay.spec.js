import React from 'react';
import { render } from '@testing-library/react';
import RemainingTimeDisplay from '../components/time-controls/RemainingTimeDisplay';

describe('RemainingTimeDisplay', () => {
    it('should render with "div" tag and the correct class', () => {
        const { container } = render(
            <RemainingTimeDisplay
                player={{
                    duration: 100,
                    currentTime: 20,
                }}
            />
        );

        // Check if a div with the class "video-react-remaining-time-display" is rendered
        const divElement = container.querySelector('div.video-react-remaining-time-display');
        expect(divElement).toBeInTheDocument();
    });

    it('should render children', () => {
        const { container } = render(
            <RemainingTimeDisplay
                player={{
                    duration: 100,
                    currentTime: 20,
                }}
            />
        );

        // Check if the component has children
        const divElement = container.querySelector('div.video-react-remaining-time-display');
        expect(divElement?.children.length).toBeGreaterThan(0);
    });
});
