import React from "react";
import { SwipeCarousel } from "../Components/Carousel";
import AnimatedText from "../Components/bouncy";
import { AnimatePresence } from "framer-motion";
import Box from "../Components/Box";

export default function Programme() {
    return(
        <>
        <div className=""
        >
            <div 
            style={{backgroundImage: "url('src/assets/stars2.png')", backgroundSize: 'contain', backgroundPosition: 'center'}}
             className="flex flex-col items-center justify-center ">
                <div className="text-white mt-40 font-mono gap-4 flex flex-col justify-center items-center ">
                    <div className="flex flex-col justify-center items-center text-xl md:text-4xl">ISRO PORTALS <Box /> </div>
                    <div className="text-xl mb-24 text-center ">Explore Our Other Initiatives!</div>
                </div>
                <div className="grid m-10 p-5 text-white text-center uppercase grid-cols-5 gap-10 md:gap-32">
                <div ><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/stem.jpg" alt="stem" />STEM</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/bhuvan.png.webp" alt="" />bhuvan</a></div>
                <div className=" hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/igrasp.png.webp" alt="" />igrasp</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/issdc.png.webp" alt="" />issdc</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/vedas.png.webp" alt="" />vedas</a></div>
                </div>
                <div 
                className="grid p-5 mb-20 text-white text-center uppercase grid-cols-4 gap-14 md:gap-36">
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/mosdac.jpg.webp" alt="" />mosdac</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/spark.png.webp" alt="" />spark</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/bhoonidhi.png.webp" alt="" />bhoonidhi</a></div>
                <div className="hover:scale-105"><a href="#"><img className="w-24 h-24 rounded-full " src="src/assets/portal/isro1.png.webp" alt="" />NDEM</a></div>
                </div>

            </div>
                <div 
                id="programmes-section"
                style={{backgroundImage: "url('src/assets/earth2.png')", backgroundSize: 'contain', backgroundPosition: 'center'}}
                className="text-white  p-4 font-mono flex flex-col h-screen justify-center items-center ">
                    <div className="flex flex-col text-center items-center justify-center text-xl md:text-4xl">RECENT UPDATES <Box/></div>
                    <div className="text-xl mb-2 text-center ">Check Out What's new at ISRO!</div>

                <div className="w-[80vw] rounded-xl mx-auto px-0 overflow-hidden "><SwipeCarousel/>
                <div className="text-xl z-20 flex justify-end items-end text-blue-400 hover:text-blue-500 transition-all underline  w-auto"><a href="">Read more here</a></div>
                </div>
                </div>
        </div>
        </>
    )
}