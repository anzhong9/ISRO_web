import React from "react";
import {Button1} from "../Components/Buttons";

export default function Hero() {
    return(
        <>
        <div className="relative text-white h-screen md:h-[124vh]" 
        style={{backgroundImage: "url('src/assets/solars.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}
        id="hero-section">
            <div className="flex flex-col text-4xl font-semibold font-sans py-2 leading-relaxed md:px-10 xl:px-12 absolute top-80 w-1/2">
                <div className="w-4/5">Space Technology In The Service of Mankind</div>
                <div className="flex justify-center items-center w-full">
                <div className="h-1/2 m-0 w-2/3 border-b-2 border-blue-600" style={{borderImage: 'repeating-linear-gradient(to right, transparent, transparent 10px, #1E88E5 10px, #1E98f5 25px) 1'}}>

</div>
             <Button1 text="EXPLORE"/>
             </div>
            </div>
            <div className="flex text-4xl flex-col md:flex-row w-auto md:w-[99vw] p-0 m-0 absolute bottom-5">
      <div className="w-1/5 flex flex-col border-r text-center border-white">
       <div className="font-bold p-3">101</div><div>SPACECRAFT MISSIONS</div>
      </div>
        <div className="w-1/5 flex flex-col border-r text-center border-white">
       <div className="font-bold p-3">72</div><div>LAUNCH MISSIONS</div>
      </div>
      <div className="w-1/5 flex flex-col border-r text-center border-white">
       <div className="font-bold p-3">9</div><div>STUDENT SATELLITES</div>
      </div>
      <div className="w-1/5 flex flex-col border-r text-center border-white">
       <div className="font-bold p-3">2</div><div>RE-ENTRY MISSIONS</div>
      </div>
      <div className="w-1/5 flex flex-col text-center border-white">
       <div className="font-bold p-3">269</div><div>FOREIGN SATELLITES</div>
      </div>
            </div>
        </div>
        </>
    )
}