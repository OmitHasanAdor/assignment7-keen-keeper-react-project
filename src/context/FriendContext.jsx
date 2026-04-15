import React, { useState } from 'react';
import { Context } from './Context';
import { toast } from 'react-toastify';



const FriendContext = ({children}) => {

  const [newActivity,setActivities] = useState([])
  const handleAddActivity = (friend,type) =>{

    const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short', // 'short' dile 'Apr', 'long' dile 'April'
    year: 'numeric'
});

    const isExist = newActivity.find(activity=>activity.id==friend.id && activity.type==type)
    if(isExist){
        toast.error(`Already added to ${type} list`)
    }else{
        toast.success(`${type} with ${friend.name}`)
        setActivities([{...friend,type,formattedDate},...newActivity])
    }
  }
  const data ={
    newActivity,
    setActivities,
    handleAddActivity,
   
  }

    //   const [callData, setCallData] = useState([])
    //   const [textData, setTextData] = useState([])
    //   const [videoData, setVideoData] = useState([])

    //   const handleVideoBtn = (friend) =>{
    //        const isExist = videoData.find(data=>data.id==friend.id)
    //     if(isExist){
    //         toast.error('Already added to video list')
    //     }else{
    //         toast.success(`Video with ${friend.name}`)
    //         setVideoData([...videoData,friend])
    //     }
    //   }

    //   const handleTextBtn = (friend) =>{
    //       const isExist = textData.find(data=>data.id==friend.id)
    //     if(isExist){
    //         toast.error('Already added to text list')
    //     }else{
    //         toast.success(`Text with ${friend.name}`)
    //         setTextData([...textData,friend])
    //     }
    //   }

    //     const handleCallBtn = (friend) =>{
      
    //     const isExist = callData.find(data=>data.id==friend.id)
    //     if(isExist){
    //         toast.error('Already added to call list')
    //     }else{
    //         toast.success(`Call with ${friend.name}`)
    //     setCallData([...callData,friend])
    //     }
     
    // }
    // const data ={
    //     callData,
    //     setCallData,
    //     handleCallBtn,
    //     handleTextBtn,
    //         textData,
    //         setTextData,
    //         handleVideoBtn,
    //         videoData,
    //         setVideoData
    // }
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    );
};

export default FriendContext;