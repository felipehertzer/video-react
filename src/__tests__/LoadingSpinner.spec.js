import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
    it('should render null when there is an error', () => {
        const { container } = render(
            <LoadingSpinner
                player={{
                    error: true,
                }}
            />
        );

        // Ensure that nothing is rendered when there's an error
        expect(container.firstChild).toBeNull();
    });

    it('should render "div" tag with seeking or waiting', () => {
        const { container } = render(
            <LoadingSpinner
                player={{
                    hasStarted: true,
                    seeking: true,
                    waiting: true,
                }}
            />
        );

        // Check if the rendered element is a div
        const divElement = container.querySelector('div');
        expect(divElement).toBeInTheDocument();
    });

    it('should render with "video-react-loading-spinner" class', () => {
        const { container } = render(
            <LoadingSpinner
                player={{
                    hasStarted: true,
                    seeking: true,
                    waiting: true,
                }}
            />
        );

        // Check if the div has the class "video-react-loading-spinner"
        const divElement = container.querySelector('div.video-react-loading-spinner');
        expect(divElement).toBeInTheDocument();
    });
});
