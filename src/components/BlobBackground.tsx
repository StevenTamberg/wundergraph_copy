"use client";

import React, { useEffect, useState } from 'react';
import Blob from '@/components/Blob';

const BlobBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const movementScale = 0.07; // Adjust this value to control the movement amount

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Use useState to set the initial state of window dimensions
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        // Set initial size on mount
        handleResize();

        // Add event listener to update size on window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const blobPositions = [
        { x: 34, y: 80, size: 10 },
        { x: 85, y: 75, size: 10 },
        { x: 15, y: 50, size: 4 },
        { x: 25, y: 20, size: 4 },
        { x: 80, y: 80, size: 4 },
        { x: 80, y: 30, size: 8 },
    ];

    return (
        <div className="w-full h-screen absolute -z-10">
            {blobPositions.map((pos, index) => (
                <Blob
                    key={`${pos.x}-${pos.y}`}
                    mousePosition={mousePosition}
                    movementScale={movementScale}
                    size={pos.size}
                    pos={{ x: pos.x, y: pos.y }}
                    windowSize={windowSize} // Pass window size as a prop to Blob
                />
            ))}
        </div>
    );
};

export default BlobBackground;
