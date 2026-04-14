import React, { use } from 'react';
import { FaFileArchive } from 'react-icons/fa';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useParams } from 'react-router';
const bookPromise=fetch('/friends.json').then(res=>res.json())
const FriendDetailsPage = () => {
    const friendData =use(bookPromise)
    const {id} =useParams()
    const findSelectedBook = friendData.find(friend=>friend.id==id)
    console.log(findSelectedBook)
 
    return (
        <div className="bg-[#F8FAFC] py-8">
            <div className=' grid grid-cols-1 md:grid-cols-3 max-w-[85%] mx-auto  gap-5 '>
           <div className="left space-y-5">
        <div className="rounded-md shadow-md text-center p-3 bg-white">
                 <div className=" flex justify-center items-center"> <img src={findSelectedBook.picture} alt={findSelectedBook.name} className=' h-25 w-25 rounded-[50%]'/></div>
        <div className=" text-center mt-3">
            <div className="">
            <h3 className=" text-2xl font-bold">{findSelectedBook.name}</h3>
         
            </div>
               <div className="">
         {
             findSelectedBook.status=='overdue'&& <p className=' badge badge-error text-white'>{findSelectedBook.status}</p>
            }
         {
             findSelectedBook.status=='on-track'&& <p className=' badge badge-info text-white' >{findSelectedBook.status}</p>
            }
         {
             findSelectedBook.status=='almost due'&& <p className=' badge badge-warning text-white'>{findSelectedBook.status}</p>
            }
            </div>
           <div className="flex justify-center gap-3 mt-3  ">
         {
            findSelectedBook.tags.map((tag ,ind)=><p key={ind} className='badge badge-success p-2 text-white'>{tag}</p>)
         }
          </div>
          <div className=" space-y-5 ">
            <h3 className=' italic text-gray-500 '>{findSelectedBook.bio}</h3>
            <p className=" text-gray-500">Preferred: {findSelectedBook.email}</p>
          </div>
      
          
        </div>
        </div>
        <div className=" flex items-center gap-2 rounded-md shadow-md text-center p-3 font-semibold bg-white"><RiNotificationSnoozeLine /> Snooze 2 weeks</div>
        <div className=" flex items-center gap-2 rounded-md shadow-md text-center p-3 font-semibold bg-white"><FaFileArchive /> Archive</div>
        <div className=" text-red-600 flex items-center gap-2 rounded-md shadow-md text-center p-3 font-semibold bg-white"><RiDeleteBin6Line /> Delete</div>
           </div>
           <div className="right col-span-2">
         <div className="1 flex gap-3 mb-5">
         <div className=" p-5 rounded-md shadow-md bg-white ">
            <h3 className=" text-2xl font-semibold text-center">{findSelectedBook.days_since_contact}</h3>
            <p className=" text-gray-500 text-center font-semibold">Days Since Contact</p>
         </div>
         <div className=" p-5 rounded-md shadow-md bg-white ">
            <h3 className=" text-2xl font-semibold text-center">{findSelectedBook.goal}</h3>
            <p className=" text-gray-500 text-center font-semibold">Goal (Days)</p>
         </div>
         <div className=" p-5 rounded-md shadow-md bg-white ">
            <h3 className=" text-2xl font-semibold text-center">{findSelectedBook.next_due_date}</h3>
            <p className=" text-gray-500 text-center font-semibold">Next Due</p>
         </div>
         </div>
         <div className="2">

         </div>
         <div className="3">

         </div>
           </div>
        </div>
        </div>
    );
};

export default FriendDetailsPage;