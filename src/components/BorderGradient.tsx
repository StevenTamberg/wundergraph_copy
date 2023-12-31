import {useState} from "react";

const BorderGradient = ({text, px, py, radius, from, to, font, text_size, hover}: any) => {


    return (
        <div className="mx-auto flex  items-center justify-center ">
            <div className={` w-full  bg-gradient-to-r   ${from} ${to} ${radius} p-px `}>
                <div className={`flex text-white h-full w-full items-center ease-in-out duration-300 justify-center ${hover ? "hover:text-dark-blue-bg hover:bg-transparent " : ""} bg-dark-blue-bg back ${radius}  ${px} ${py}`}>
                    {!hover && (
                        <>
                            <span className="bg-white h-3 w-3 rounded-full ml-1"></span>
                            <span className="bg-white h-3 w-3 rounded-full relative right-3 animate-pulse"></span>
                        </>
                    )}
                    <h1 className={`${font} ${text_size} p-1`}>{text}</h1>
                </div>
            </div>
        </div>
    )
}
export default BorderGradient
