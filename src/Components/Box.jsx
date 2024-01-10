import React from 'react';

function Box () {
  return (
    <div className="flex m-1">
      <div className="w-[10px] h-[10px] border-1 border-white mr-2 bg-orange-500"></div>
      <div className="w-[10px] h-[10px] border-1 border-white mr-2 bg-violet-500"></div>
      <div className="w-[10px] h-[10px] border-1 border-white bg-green-500"></div>
    </div>
  );
};

export default Box;