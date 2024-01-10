import React from "react";
import {Button2} from "../Components/Buttons";
import ServiceCard from "../Components/ServiceCard";
import Box from "../Components/Box";

export default function Service() {
    return(
        <div 
        style={{backgroundImage: "url('/assets/chaand.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className=" text-white"
        >
            <div className="flex w-1/2 flex-col"
            id="services-section">
                <div className="flex mt-52 font-mono md:px-10 md:py-3 p-2 justify-start items-center">
                    <div className="ab flex flex-col text-xl md:text-4xl">ABOUT US <Box /> </div>
                </div>
                <div className=" md:px-10 p-3s w-4/5 leading-6 text-justify text-lg">ISRO is India's space agency, operating under the Department of Space. It focuses on utilizing outer space for the benefit of India and humanity through science, engineering, and technology. ISRO plays a key role in executing the Indian Space Programme through its various centers and units.</div>
               <div className="ml-[10%]"><Button2 text="LEARN MORE"></Button2></div> 
            </div>
            <div className="flex items-center justify-between flex-col">
                <div className="flex ml-auto font-mono px-10 items-center">
                    <div className="ab flex flex-col items-end text-xl md:text-4xl">OUR SERVICES <Box /></div>
                </div>
                <div className="ml-auto md:px-12 p-3 text-justify w-2/5 leading-6 text-lg">ISRO pioneers space exploration, satellite launches, and technology advancements, propelling India into the forefront of the global space arena.</div>
                
            </div>
        </div>
        <div 
        className=" text-white flex flex-col p-5 md:py-10 ">
            <div className="serv flex justify-evenly w-full ">
                <ServiceCard title='Satellite Services' image="src\assets\Services\satellite.png" link='https://www.isro.gov.in/SatelliteSystemBusSubSystemTesting.html'/>
                <ServiceCard title='Ground -Systems' image="src\assets\Services\ground.png" link='https://www.isro.gov.in/GroundSystemSupport.html'/>
                <ServiceCard title=' Launch - Services ' image="src\assets\Services\rocket.png" link='https://www.isro.gov.in/launchservices.html'/>
                <ServiceCard title='Earth Observation' image="src\assets\Services\obs.png" link='https://www.isro.gov.in/SpaceBasedEarthObservationServices.html'/>
                <ServiceCard title='Transferring Orbit' image="src\assets\Services\orbit.png" link='https://www.isro.gov.in/TransferOrbitService.html'/>
            </div>
            <div className=" flex justify-center items-center mt-20"><Button2 text="SEE ALL"/></div>
        </div>
        </div>
    )
}