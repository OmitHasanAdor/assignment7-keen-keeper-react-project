import React, { useContext } from 'react';
import { Context } from '../context/Context';
import call from '../assets/call.png'

const TimelinePage = () => {
    const {handleCallBtn,callData}=useContext(Context)
    console.log(handleCallBtn)
    console.log(callData)
    return (
        <div>
        <div className="cal">
              {
          callData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={call} alt="" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Call</span><span className=' text-gray-500'>with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>)
          }
        </div>
        
        </div>
    );
};

export default TimelinePage;