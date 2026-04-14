import React from 'react';
import { MdAddHomeWork } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="flex-1">
   <Link to={'/'}> <img src={logo} alt="logo" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      
       <li><NavLink to={"/"} className={({isActive})=> isActive ? 'bg-[#244D3F] text-white flex items-center gap-2' : ' text-gray-700 flex items-center gap-2'}><MdAddHomeWork /> Home</NavLink></li>
       <li><NavLink to={"/timeline"} className={({isActive})=> isActive ? 'bg-[#244D3F] text-white flex items-center gap-2' : ' text-gray-700 flex items-center gap-2'}>Timeline</NavLink></li>
       <li><NavLink to={"/stats"} className={({isActive})=> isActive ? 'bg-[#244D3F] text-white flex items-center gap-2' : ' text-gray-700 flex items-center gap-2'}>Stats</NavLink></li>

    </ul>
  </div>
</div>
    );
};

export default Navbar;