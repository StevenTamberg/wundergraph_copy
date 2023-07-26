"use client";

import {useEffect, useState} from "react";
import {useMotionTemplate, useScroll} from "framer-motion";
import {BsDiscord} from "react-icons/bs";

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


        <div className={`fixed z-40 flex justify-center top-0 w-screen glassmorphism left-0 border-border ${scroll ? "border-b  ease-in-out duration-300" : ""}`} >
            <div className={'flex xl:mx-[5%] 2xl:w-1400 justify-between  w-auto'}>
                <div className="flex text-white font-semibold text-lg gap-7 ">
                    WunderGraph
                    <button className="button">Product</button>
                    <button className="button">Developers</button>
                    <button className="button">Pricing</button>
                    <button className="button">Community</button>
                    <button className="button">Blog</button>
                </div>
                <div className="flex text-white font-semibold text-lg gap-7 items-center">
                    <span className="text-gray-500 hover:text-gray-400 cursor-pointer"><BsDiscord/></span>
                    <button className="button">Talk to sales</button>
                    <button className="button">Login</button>
                    <button className="blue_button py-1.5 px-4">Sign up</button>

                </div>

            </div>
        </div>


    )
}
export default Nav
