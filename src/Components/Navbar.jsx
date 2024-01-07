import React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent,  useScroll } from "framer-motion";


export default function Navbar() {
    const handleClickScroll = (idName) => {
        console.log(idName);
        const element = document.getElementById(idName);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

     const {scrollY} = useScroll();
     const [hidden, setHidden] = useState(false); 
      useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        }
        );

    return (
        <div className="">
        <motion.nav 
        variants={
            {
                hidden: {
                    y: -100,
                    opacity: 0,
                },
                visible: {
                    y: 0,
                    opacity: 1,
                },
            }
        }
        animate = {hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex fixed top-2 transition-all bg-white bg-opacity-5 z-50 backdrop-filter backdrop-blur-sm rounded-xl text-white w-full

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
    </motion.nav>

    </div>
)

}