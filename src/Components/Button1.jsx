import React from "react";

export default function Button1(props) {
  return (
    <>
       <button
        className="inline-flex w-60 m-5 ml-0 items-center justify-center px-32 py-4 text-2xl text-white font-medium rounded-l-lg rounded-r-lg bg-transparent border-2 border-blue-700 hover:bg-opacity-10 hover:bg-blue-500 active:bg-gray-900 active:opacity-90 active:text-cyan-50 hover:border-transparent transition duration-150 ease-in-out"
        style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}
      >
       {props.text}
      </button>
    </>
  );
}   