import React, { useState } from 'react';
import { Context } from './Context';
import { toast } from 'react-toastify';



const FriendContext = ({children}) => {
      const [callData, setCallData] = useState([])

        const handleCallBtn = (friend) =>{
      
        const isExist = callData.find(data=>data.id==friend.id)
        if(isExist){
            toast.error('Already added to call list')
        }else{
            toast.success(`Call with ${friend.name}`)
        setCallData([...callData,friend])
        }
     
    }
    const data ={
        callData,
        setCallData,
        handleCallBtn
    }
    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    );
};

export default FriendContext;