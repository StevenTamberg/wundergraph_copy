import BorderGradient from "@/components/BorderGradient";
import BlobBackground from "@/components/BlobBackground";
import Marquee from "@/components/Marquee";

export default function Home() {
    return (
        <>
            <BlobBackground/>
            <div className="z-10 mx-[15%] flex justify-center flex-col items-center mt-20">
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
                                                         px={"px-6"} to={"from-purple-500"} text={"Get Started"} hover={true}/>
                    </button>
                </div>
                <div className="text-gray-500 text-md mt-40 mb-12">
                    TRUSTED BY
                </div>
            </div>
            <Marquee/>


        </>
    )
}
