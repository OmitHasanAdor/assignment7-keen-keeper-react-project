import React, { use } from 'react';
import FriendCard from './FriendCard';

const Friends = ({bookPromise}) => {
    const friendData =use(bookPromise)
    // console.log(friendData)
    return (
    <div className="max-w-[85%] mx-auto">
            <h3 className=' text-2xl font-bold'>Friends</h3>
            <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5'>
        
            {
friendData.map((friend,ind)=><FriendCard key={ind} friend={friend}></FriendCard>)
            }
        </div>
    </div>
    );
};

export default Friends;