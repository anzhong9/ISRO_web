import React from "react";
import {Button3} from "../Components/Buttons";

export default function ServiceCard(props) {
    const link=props.link;
return (
    <>
    <div className="px-2 w-[240] transition-all bg-blue-950 bg-opacity-10 duration-75 ease-in-out border-blue-950 border-[1px] hover:scale-[1.01] hover:border-blue-900 h-96 flex justify-center items-center flex-col">
        <div className="w-10/12 text-center text-[28px] leading-7">{props.title}</div>
        <div className="mt-2 animate-pulse"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
</svg>
</div>
        <div className="mt-5 h-[115px] w-[115px] rounded-full border-[1px] border-gray-800 flex justify-center items-center">
            <div className=" h-24 w-24 overflow-clip border-double border-[1px] hover:border-b-2 hover:border-blue-800 border-gray-600 rounded-full">
                <img className=" bg-center" src={props.image} alt="" /> 
        </div></div>
        <div className="flex justify-evenly mt-11"> <a target="_blank" href={link}><Button3/></a> </div>
    </div>
    </>
)
}