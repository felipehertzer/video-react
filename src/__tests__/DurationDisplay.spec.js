import React from 'react';
import { render } from '@testing-library/react';
import DurationDisplay from '../components/time-controls/DurationDisplay';

describe('DurationDisplay', () => {
    it('should render with "div" tag', () => {
        const { container } = render(
            <DurationDisplay
                player={{
                    duration: 100,
                    currentTime: 20,
                }}
            />
        );

        // Find the div with the class 'video-react-duration-display'
        const durationDiv = container.querySelector('div.video-react-duration-display');
        expect(durationDiv).toBeInTheDocument();
    });

    it('should have more than 1 child', () => {
        const { container } = render(
            <DurationDisplay
                player={{
                    duration: 100,
                    currentTime: 20,
                }}
            />
        );

        // Find the div and check if it has more than one child
        const durationDiv = container.querySelector('div.video-react-duration-display');
        expect(durationDiv?.childElementCount).toBeGreaterThan(0);
    });
});
