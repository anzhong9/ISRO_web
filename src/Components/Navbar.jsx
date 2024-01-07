import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Navbar() {
    const handleClickScroll = (idName) => {
        console.log(idName);
        const element = document.getElementById(idName);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      const [scrollPos, setScrollPos] = useState(0);
      const [visible, setVisible] = useState(true);
    
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(scrollPos > currentScrollPos || currentScrollPos < 10);
        setScrollPos(currentScrollPos);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollPos]);

return (
    <div className="">
    <nav 
    className="flex fixed top-2 transition-all bg-white bg-opacity-5 z-50 backdrop-filter backdrop-blur-sm rounded-xl text-white w-full
    ${
        visible ? 'opacity-100' : 'opacity-0 -translate-y-full'
      }">
        <div className="flex  p-1 gap-10 items-center justify-around">
            <a className="border-r-[1px] pr-8 border-slate-300" href="#"><img src="src\assets\ISRO.svg" alt="" /></a>
            <h1 className=" text-5xl font-light text-pretty font-mono" >ISRO</h1>
        </div>
        <div className="flex flex-grow justify-end">
            <ul className="flex items-center font-medium justify-around text-xl gap-16 mr-16">
            <button className="active:scale-[1.02] p-1 bg-transparent rounded-lg active:text-blue-300 hover:shadow-sm hover:shadow-cyan-700 " onClick={() => handleClickScroll('hero-section')}>
           Home </button>
            <button onClick={() => handleClickScroll("services-section")}> 
           Services
            </button>
            <button onClick={() => handleClickScroll("programmes-section")}>
            Updates
            </button>
            <button onClick={() => handleClickScroll("activities-section")}>
            
            </button>
            </ul>
        </div>
    </nav>

    </div>
)

}