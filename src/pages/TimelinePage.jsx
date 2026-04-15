import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';
import call from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'

const TimelinePage = () => {
    const [selectTimeline, setSeletTimeline] = useState('all')

    const { newActivity } = useContext(Context)

    return (
        <div>
            <div className="sort max-w-[85%] mx-auto">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-2xl font-bold">Timeline</legend>
                    <select
                        className="select"
                        onChange={(e) => setSeletTimeline(e.target.value)}
                       >

                        <option value="all" hidden>Filter Timeline</option>
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="video">Video</option>
                    </select>
                    {/* <span className="label">Optional</span> */}
                </fieldset>
            </div>
{newActivity.length === 0 ? <div className="text-center text-gray-500 py-20 rounded-md shadow-md bg-base-200 max-w-[80%] mx-auto my-5">No activities to display</div> : newActivity
  .filter(item => selectTimeline === 'all' || item.type === selectTimeline)
  .map((item,ind) => (
    <div key={ind} className="flex items-center gap-5 p-3 shadow-md my-3 max-w-[85%] mx-auto rounded-md bg-white">

      {/* icon based on item.type */}
      <div className="w-10 h-10">
        {item.type === 'call' && <img src={call} />}
        {item.type === 'text' && <img src={text} />}
        {item.type === 'video' && <img src={video} />}
      </div>

      {/* content */}
      <div>
        <h4>
          <span className=' font-bold'>{item.type}</span> with {item.name}
        </h4>
        <p>{item.formattedDate}</p>
      </div>

    </div>
))}


        </div>
    );
};

export default TimelinePage;