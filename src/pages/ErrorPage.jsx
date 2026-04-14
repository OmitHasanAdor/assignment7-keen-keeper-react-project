import React from 'react';
import { MdAddHomeWork } from 'react-icons/md';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className=" space-y-3 text-center max-w-100 mx-auto mt-20">
        <h1 className='text-9xl font-bold text-[#244D3F]'>404</h1>
        <p className='text-xl'>Page not found</p>
        <p className=" text-gray-600 ">The page you are looking for does not exist.</p>
        <Link to={'/'}>
        <button className="bg-[#244D3F] text-white px-4 py-2 rounded-md hover:bg-[#1a3a2d] flex items-center gap-2 mx-auto"><MdAddHomeWork />Go Back</button>
        </Link>
            </div>

        </div>
    );
};

export default ErrorPage;