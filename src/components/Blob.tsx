"use client";
import React, {useEffect, useState} from "react";

const Blob = ({ mousePosition, movementScale, size, pos }: any) => {

    // Check if running in the browser before accessing the window object
    const [w, setW] = useState({
        width: 0,
        height: 0,
    });
    const [sz, setSz] = useState(0);

    useEffect(() => {
        setW({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        setSz(size * 4);

    }, [size]);

    return (
        <div
            className={`bg-blob rounded-full absolute transition-transform ease-in-out duration-300`}
            style={{ width: sz, height: sz,
                left: `calc( -${pos.x}% + 100% - ${((mousePosition.x / w.width) * (size - 2) * 10 * movementScale).toFixed(2)}%)`,
                top: `calc(-${pos.y}% + 100% - ${((mousePosition.y / w.height) * (size - 2) * 5 * movementScale).toFixed(2)}%)`,
            }}
        ></div>
    );
};

export default Blob;
