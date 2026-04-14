import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`/friend/${friend.id}`} className=' flex flex-col justify-center items-center p-5 shadow-md rounded-md'>
        <div className=""> <img src={friend.picture} alt={friend.name} className=' h-25 w-25 rounded-[50%]'/></div>
        <div className=" text-center mt-3">
            <div className="">
            <h3 className=" text-2xl font-bold">{friend.name}</h3>
            <p className=" text-gray-500">{friend.days_since_contact}d ago</p>
            </div>
           <div className="flex justify-center gap-3 mb-3  ">
         {
            friend.tags.map((tag,ind)=><p key={ind} className='badge badge-success p-2 text-white'>{tag}</p>)
         }
          </div>
         <div className="">
         {
             friend.status=='overdue'&& <p className=' badge badge-error text-white'>{friend.status}</p>
            }
         {
             friend.status=='on-track'&& <p className=' badge badge-info text-white' >{friend.status}</p>
            }
         {
             friend.status=='almost due'&& <p className=' badge badge-warning text-white'>{friend.status}</p>
            }
            </div>
          
        </div>
        </Link>
    );
};

export default FriendCard;