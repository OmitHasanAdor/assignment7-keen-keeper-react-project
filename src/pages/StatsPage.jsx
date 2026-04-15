import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { Context } from '../context/Context';

const StatsPage = () => {
    
    const { newActivity } = useContext(Context)
    const data = [
  { name: 'Call', value: newActivity.filter(item => item.type === 'call').length, fill: '#0088FE' },
  { name: 'Text', value: newActivity.filter(item => item.type === 'text').length, fill: '#00C49F' },
  { name: 'Video', value: newActivity.filter(item => item.type === 'video').length, fill: '#FFBB28' },
 
];

    return (
     <div className=" bg-[#F8FAFC] py-10">
       <div className="max-w-[80%] mx-auto"> <h2 className=" text-4xl font-bold mb-5">Friendship Analytics</h2></div>

    { newActivity.length === 0 ? <div className="text-center text-gray-500 py-20 rounded-md shadow-md bg-base-200 max-w-[80%] mx-auto my-5">No stats to display</div> :  <div className="py-10 px-3 bg-white rounded-md shadow-md max-w-[80%] mx-auto">
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
       }
     </div>
    );
};

export default StatsPage;