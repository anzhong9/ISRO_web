import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const handleClickScroll = (idName) => {
        console.log(idName);
        const element = document.getElementById(idName);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
return (
    <>
    <nav className="flex absolute bg-white bg-opacity-5 z-50 backdrop-filter backdrop-blur-sm rounded-xl text-white w-full">
        <div className="flex m-3 p-1 gap-10 items-center justify-around">
            <a className="border-r-[1px] pr-8 border-slate-300" href="#"><img src="src\assets\ISRO.svg" alt="" /></a>
            <h1 className=" text-4xl font-light text-pretty font-mono" >ISRO</h1>
        </div>
        <div className="flex flex-grow justify-end">
            <ul className="flex items-center font-medium justify-around text-xl gap-16 mr-16">
            <button onClick={() => handleClickScroll("hero-section")}>
           Home</button>
            <button onClick={() => handleClickScroll("services-section")}> 
           Services
            </button>
            <button onClick={() => handleClickScroll("activities-section")}>
            Activities
            </button>
            <button onClick={() => handleClickScroll("programmes-section")}>
            Programmes
            </button>
            </ul>
        </div>
    </nav>

    </>
)

}