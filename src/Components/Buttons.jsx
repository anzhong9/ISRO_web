import React from "react";

function Button1(props) {
  return (
    <button
    className="btn inline-flex w-60 m-5 ml-0 items-center justify-center px-32 py-4 text-2xl text-white font-medium rounded-l-lg rounded-r-lg 
    bg-transparent border-2 border-blue-700 hover:bg-opacity-5 hover:bg-blue-500 active:bg-gray-900 active:opacity-90 active:text-cyan-50
     transition duration-150 ease-in-out">
      {props.text}
     
    </button>
  );
}   

function Button2(props) {
  return (
    <>
       <button
        className="inline-flex items-center justify-center mt-4 px-10 py-3 text-xls  text-white font-medium rounded-l-lg rounded-r-lg bg-transparent border-2 border-blue-700 hover:bg-opacity-10 hover:bg-blue-500 hover:scale-95 active:scale-100 active:bg-gray-900 active:opacity-90 active:text-cyan-50transition duration-150 ease-in-out"
      >
       {props.text}
      </button>
    </>
  );
}

function Button3(props) {
  return (
    <>
       <button
        className="inline-flex items-center justify-center mx-5 px-3 p-1 text-sm text-white font-thin rounded-l-lg rounded-r-lg bg-transparent border-2 border-blue-100 hover:bg-opacity-10 hover:bg-blue-600 active:bg-gray-900 active:opacity-90 active:text-cyan-50 transition duration-150 ease-in-out">
      Learn More
      </button>
    </>
  );
}
export {Button1,Button2, Button3};