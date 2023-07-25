"use client";

import {useEffect, useState} from "react";
import {useMotionTemplate, useScroll} from "framer-motion";

const Nav = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            // Calculate the scroll position (you can customize this threshold)
            const scrollThreshold = 50;
            const currentScrollY = window.scrollY;

            // Update the state based on the scroll position
            setScroll(currentScrollY > scrollThreshold);
        };

        // Attach the event listener for the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <div className={`fixed top-0 w-screen glassmorphism left-0 border-border ${scroll ? "border-b  ease-in-out duration-300" : ""}`} >
            <div className={'flex xl:mx-[5%] 2xl:mx-[15%] justify-between  w-auto'}>
                <div className="flex text-white font-semibold text-lg gap-7 ">
                    WunderGraph
                    <button className="button">Product</button>
                    <button className="button">Developers</button>
                    <button className="button">Pricing</button>
                    <button className="button">Community</button>
                    <button className="button">Blog</button>
                </div>
                <div className="flex text-white font-semibold text-lg gap-7 ">
                    <button className="button">Talk to sales</button>
                    <button className="button">Login</button>
                    <button className="blue_button">Sign up</button>

                </div>

            </div>
        </div>


    )
}
export default Nav
