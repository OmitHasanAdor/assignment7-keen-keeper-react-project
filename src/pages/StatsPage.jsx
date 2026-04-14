import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Context } from '../context/Context';

const StatsPage = () => {
       const {callData}=useContext(Context)
       const {textData}=useContext(Context)
       const {videoData}=useContext(Context)   
    const data = [
  { name: 'Call', value: callData.length, fill: '#0088FE' },
  { name: 'Text', value: textData.length, fill: '#00C49F' },
  { name: 'Video', value: videoData.length, fill: '#FFBB28' },
 
];

    return (
     <div className=" bg-[#F8FAFC] py-10">
       <div className="max-w-[80%] mx-auto"> <h2 className=" text-4xl font-bold mb-5">Friendship Analytics</h2></div>
       <div className="py-10 px-3 bg-white rounded-md shadow-md max-w-[80%] mx-auto">
           <h3 className=' text-2xl font-semibold'>By Interaction Type</h3>
            <div className=' flex justify-center items-center '>
         
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Tooltip></Tooltip>
                <Legend></Legend>
            </PieChart>
        </div>
       </div>
     </div>
    );
};

export default StatsPage;