import artnet from "@@/marquee/artnet.svg";
import cloudiam from "@@/marquee/cloudiam.svg";
import coinweb from "@@/marquee/coinweb.svg";
import fauna_light from "@@/marquee/fauna-light.svg";
import mongodb from "@@/marquee/mongodb.svg";
import oracle from "@@/marquee/oracle.svg";
import tailor from "@@/marquee/tailor.svg";
import tripadvisor from "@@/marquee/tripadvisor.svg";
import neurologik from "@@/marquee/neurologik.png"


import Image from "next/image";

const Marquee = () => {
    return (
        <div className="relative flex overflow-x-hidden w-auto z-10 ">
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-dark-blue-bg via-dark-blue-bg to-transparent w-1/6"></div>
            <div className="absolute z-20 right-0 top-0 h-full w-1/6 bg-gradient-to-r from-transparent via-dark-blue-bg to-dark-blue-bg"></div>
            <div className=" animate-marquee whitespace-nowrap flex gap-10  items-center">

                <span className="mx-4 text-4xl">
                    <Image height={80} width={80} src={cloudiam}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={170} width={170} src={coinweb}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={100} width={100} src={artnet}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={100} width={100} src={fauna_light}  alt=""/>
                </span>
                <span className="mx-4 text-2xl text-white">
                    Auth
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={150} width={150} src={mongodb}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={150} width={150} src={neurologik}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={120} width={120} src={oracle}  alt=""/>
                </span>
                <span className="mx-4 text-4xl mb-2">
                    <Image height={90} width={90} src={tailor}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={130} width={130} src={tripadvisor}  alt=""/>
                </span>
            </div>

            <div className="absolute  animate-marquee2 whitespace-nowrap flex gap-10   items-center">
                <span className="mx-4 text-4xl">
                    <Image height={80} width={80} src={cloudiam}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={170} width={170} src={coinweb}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={100} width={100} src={artnet}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={100} width={100} src={fauna_light}  alt=""/>
                </span>
                <span className="mx-4 text-2xl text-white">
                    Auth
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={150} width={150} src={mongodb}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={150} width={150} src={neurologik}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={120} width={120} src={oracle}  alt=""/>
                </span>
                <span className="mx-4 text-4xl mb-2">
                    <Image height={90} width={90} src={tailor}  alt=""/>
                </span>
                <span className="mx-4 text-4xl">
                    <Image height={130} width={130} src={tripadvisor}  alt=""/>
                </span>
            </div>

        </div>
    )
}

export default Marquee;
