import React, { useContext } from 'react';
import { Context } from '../context/Context';
import call from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'

const TimelinePage = () => {

    const {callData}=useContext(Context)
    const {textData}=useContext(Context)
    const {videoData}=useContext(Context)   
    console.log(textData)
    console.log(callData)
    console.log(videoData)
    return (
        <div>
        <div className="cal">
              {
          callData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={call} alt="call" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Call</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>)
          }
        </div>
        <div className="text">
            {
                  textData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={text} alt="text" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Text</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>)
            }
        </div>
        <div className="video">
            {
   videoData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={video} alt="video" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Video</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>)
            }
        </div>
        </div>
    );
};

export default TimelinePage;