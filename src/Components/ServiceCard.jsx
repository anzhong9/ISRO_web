import React from "react";
import {Button3} from "../Components/Buttons";

export default function ServiceCard(props) {
    const link=props.link;
return (
    <>
    <div className="px-2 w-[240] transition-all duration-75 ease-in-out border-blue-950 border-[1px] hover:scale-[1.01] hover:border-cyan-950 h-96 flex justify-center items-center flex-col">
        <div className="w-10/12 text-center text-[28px] leading-7">{props.title}</div>
        <div className=" animate-pulse">⬇</div>
        <div className="mt-5 h-[115px] w-[115px] rounded-full border-[1px] border-gray-700 flex justify-center items-center"><div className=" h-24 w-24 overflow-clip border-double border-[1px] hover:border-b-2 hover:border-blue-700 border-gray-500 rounded-full"><img src={props.image} alt="" /> </div></div>
        <div className="flex justify-evenly mt-11">➡➡ <a href={link}><Button3/></a> ⬅⬅</div>
    </div>
    </>
)
}