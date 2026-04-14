import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import call from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'

const TimelinePage = () => {
    const [selectTimeline,setSeletTimeline]=useState('all')

    const {callData}=useContext(Context)
    const {textData}=useContext(Context)
    const {videoData}=useContext(Context)   
    console.log(textData)
    console.log(callData)
    console.log(videoData)
    return (
        <div>
            <div className="sort max-w-[85%] mx-auto">
                <fieldset className="fieldset">
  <legend className="fieldset-legend text-2xl font-bold">Timeline</legend>
  <select 
  className="select" 
  onChange={(e) => setSeletTimeline(e.target.value)} 
  defaultValue="all">

  <option value="all" hidden>Filter Timeline</option> 
  <option value="text">Text</option>
  <option value="call">Call</option>
  <option value="video">Video</option>
</select>
  {/* <span className="label">Optional</span> */}
</fieldset>
            </div>
        <div className="call">
              {( selectTimeline=='all' || selectTimeline=='call')&&
         ( callData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={call} alt="call" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Call</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>))
          }
        </div>
        <div className="text">
            { ( selectTimeline=='all' || selectTimeline=='text') &&
              (    textData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={text} alt="text" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Text</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>))
            }
        </div>
        <div className="video">
            { ( selectTimeline=='all' || selectTimeline=='video') &&
 (  videoData.map(friend=><div key={friend.id} className=' flex items-center gap-10 my-5 rounded-md shadow-md p-3 bg-white max-w-[85%] mx-auto' >
            <div className="img"><img src={video} alt="video" /></div>
            <div className="rest">
                <h4 className=""> <span className=" font-semibold">Video</span> <span className=' text-gray-500'> with {friend.name}</span></h4>
                <p className=" text-gray-500">{friend.next_due_date}</p>
            </div>
          </div>))
            }
        </div>
        </div>
    );
};

export default TimelinePage;