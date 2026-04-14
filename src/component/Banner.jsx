import React from 'react';

const Banner = () => {
    return (
        <div className=' my-5 max-w-[80%] mx-auto border-b-2 border-gray-300 '>
            <div className="left space-y-5 text-center mb-5">
        <h3 className=" text-center text-4xl font-bold">Friends to keep close in your life</h3>
        <p className=" text-gray-600">Your personal shelf of meaningful connections. Browse, <br /> tend, and nurture the
relationships that matter most.</p>
<button className=' bg-[#244D3F] text-white px-4 py-2 rounded-xs'>+ Add a Friend</button>
            </div>
            <div className="right grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
        <div className=" text-center rounded-md shadow-md p-5 space-y-5">
            <h3 className=' text-2xl font-bold'>10</h3>
            <p className=" text-gray-500">Total Friends</p>
        </div>
        <div className=" text-center rounded-md shadow-md p-5 space-y-5">
            <h3 className=' text-2xl font-bold'>3</h3>
            <p className=" text-gray-500">On Track</p>
        </div>
        <div className=" text-center rounded-md shadow-md p-5 space-y-5">
            <h3 className=' text-2xl font-bold'>6</h3>
            <p className=" text-gray-500">Need Attention</p>
        </div>
        <div className=" text-center rounded-md shadow-md p-5 space-y-5">
            <h3 className=' text-2xl font-bold'>12</h3>
            <p className=" text-gray-500">Interactions This Month</p>
        </div>
            </div>
        </div>
    );
};

export default Banner;