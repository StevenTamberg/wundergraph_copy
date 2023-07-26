import BorderGradient from "@/components/BorderGradient";
import BlobBackground from "@/components/BlobBackground";
import Marquee from "@/components/Marquee";
import image_ from "@@/marquee/image.svg";
import Image from "next/image";
import {BsFillBoxFill} from "react-icons/bs";
import {AiFillHeart, AiOutlineCheck} from "react-icons/ai";
import React from "react";

export default function Home() {
    return (
        <>
            <BlobBackground/>
            <div className="z-10 mx-[15%] flex justify-center flex-col items-center mt-36">
                <BorderGradient px={"px-2 pb-px"} from={"from-purple-500"} to={"to-pink-400"} radius={"rounded-full"}
                                font={"font-medium"} text_size={"text-sm"}
                                text={"If you like WunderGraph, give it a star on GitHub! ⭐️"}/>
                <div className="flex flex-col items-center text-white font-semibold text-7xl mt-20">
                    <h1>The Backend for</h1>
                    <h1>Frontend framework</h1></div>
                <h3 className="text-xl w-800 text-center mt-14 font-normal text-dark-grey-button">WunderGraph is a next
                    generation BFF framework designed to optimize frontend, fullstack, and backend developer workflows
                    through API composition.</h3>
                <div className=" mt-14 flex gap-5">
                    <button className="blue_button py-3 text-base px-7">Sign up for free</button>
                    <button className=""><BorderGradient from={"to-pink-400"} radius={"rounded-md"} py={"py-2"}
                                                         px={"px-6"} to={"from-purple-500"} text={"Get Started"}
                                                         hover={true}/>
                    </button>
                </div>
                <div className="text-gray-500 text-md mt-44 mb-12">
                    TRUSTED BY
                </div>
            </div>
            <Marquee/>
            <div className="z-10 mx-[15%] flex justify-center flex-col items-center mt-36">
                <div className="text-white font-semibold text-lg  flex gap-20 justify-center">

                    <div className="w-380 ">
                        <span className="text-pink-500 text-xl"><BsFillBoxFill/></span>
                        <h3 className="my-2 mt-4">APIs as Dependencies</h3>
                        <p className="text-gray-400 text-base font-normal">Define which data sources your frontend
                            depends
                            on and WunderGraph handles the rest. Say
                            goodbye to unmaintainable glue code, focus on adding real business value.</p>
                    </div>
                    <div className="w-380 ">
                        <span className="text-pink-500 text-xl"><AiFillHeart/></span>
                        <h3 className="my-2 mt-4">Backend for Frontend</h3>
                        <p className="text-gray-400 text-base font-normal">WunderGraph lives next to your frontend code,
                            but can also be used stand alone as an API Gateway.
                            Whatever youre building, you can always depend on the same great DX.</p>
                    </div>
                    <div className="w-380">
                        <span className="text-pink-500 text-xl"><AiOutlineCheck/></span>
                        <h3 className="my-2 mt-4">End-to-end Typesafety</h3>
                        <p className="text-gray-400 text-base font-normal">Start new projects in minutes with powerful
                            conventions and code generation. WunderGraph generates
                            instant, typesafe API clients, including authentication and file uploads.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-40">
                    <Image src={image_} alt="" width={60} height={180}/>
                </div>
                <div className=" flex justify-center flex-col items-center mt-24">
                    <p className="text-pink-500 text-lg font-semibold mb-8">Compose</p>
                    <h2 className="font-semibold text-white text-5xl">Build the backend you want</h2>
                    <h3 className="text-xl w-800 text-center mt-6 font-normal text-dark-grey-button">Transform your
                        databases, services, file storage, identity providers and 3rd party APIs into your own
                        Firebase-like Developer Toolkit in seconds, without getting locked into a specific vendor.</h3>
                </div>
            </div>


        </>
    )
}
