import React from "react";
import { SwipeCarousel } from "../Components/Carousel";

export default function Programme() {
    return(
        <>
        <div className="">
            <div
             style={{backgroundImage: "url('src/assets/chaand2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
             className="flex flex-col items-center justify-center ">
                <div className="text-white mt-40 font-mono flex flex-col justify-center items-center ">
                    <div className="flex flex-col text-xl md:text-4xl">ISRO PORTALS<div className=" my-0 mx-auto">...</div></div>
                    <div className="text-xl mb-24 text-center ">Explore Our Other Initiatives!</div>
                </div>
                <div className="grid m-10 p-5 text-white text-center uppercase grid-cols-5 gap-10 md:gap-32">
                <div className=""><a href="#"><img src="src/assets/portal/stem.jpg" alt="stem" />STEM</a></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                </div>
                <div id="programmes-section"
                className="grid p-5 mb-20 text-white text-center uppercase grid-cols-4 gap-14 md:gap-36">
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                <div className=""><img src="src/assets/portal/stem.jpg" alt="" /></div>
                </div>

            </div>
                <div 
                style={{backgroundImage: "url('src/assets/chaand.jpg')", backgroundSize: 'cover ', backgroundPosition: 'center'}}
                className="text-white  p-4 font-mono flex flex-col justify-center items-center ">
                    <div className="flex flex-col text-xl md:text-4xl">RECENT UPDATES<div className=" my-0 mx-auto">...</div></div>
                    <div className="text-xl mb-2 text-center ">Check Out What's new at ISRO!</div>
                <div className="w-[80vw] rounded-xl mx-auto px-0 overflow-hidden "><SwipeCarousel/>
                <div className="text-xl z-20 flex justify-end items-end text-blue-400 hover:text-blue-500 transition-all underline  w-auto"><a href="">Read more here</a></div>
                </div>
                </div>
        </div>
        </>
    )
}