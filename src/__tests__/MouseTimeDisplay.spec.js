import React from 'react';
import { render, screen } from '@testing-library/react';
import MouseTimeDisplay from '../components/control-bar/MouseTimeDisplay';

describe('MouseTimeDisplay', () => {
    it('should render as a "div" tag', () => {
        const { container } = render(
            <MouseTimeDisplay
                actions={{}}
                duration={100}
                mouseTime={{
                    time: 10,
                }}
            />
        );

        // Check if the rendered component is a div
        const divElement = container.querySelector('div');
        expect(divElement).toBeInTheDocument();
    });

    it('should render with "video-react-mouse-display" class', () => {
        const { container } = render(
            <MouseTimeDisplay
                actions={{}}
                duration={100}
                mouseTime={{
                    time: 10,
                }}
            />
        );

        // Check if the div has the "video-react-mouse-display" class
        const divElement = container.querySelector('div.video-react-mouse-display');
        expect(divElement).toBeInTheDocument();
    });

    it('should render with custom text', () => {
        const text = 'aloha';
        render(
            <MouseTimeDisplay
                actions={{}}
                duration={100}
                mouseTime={{
                    time: 10,
                }}
                text={text}
            />
        );

        // Check if the div has the correct data-current-time attribute
        const divElement = screen.getByRole('presentation'); // Assuming the role is 'presentation'
        expect(divElement).toHaveAttribute('data-current-time', text);
    });
});
