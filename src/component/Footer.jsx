import React from 'react';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <div className=' bg-[#244D3F] py-10 text-white '>
          <div className="mb-5 md:max-w-[70%] mx-auto space-y-5">
            <h2 className=' text-4xl font-bold text-center'>
            KeenKeeper
            </h2>
            <p className=" opacity-80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-5">
            <p className=" text-center ">Social Links</p>
           <div className="cont flex gap-5">
             <div className=""><img src={facebook} alt="facebook" /></div>
            <div className=""><img src={instagram} alt="instagram" /></div>
            <div className=""><img src={twitter} alt="twitter" /></div>
           </div>
           
          </div>
          <div className="copy-right flex justify-around mt-10 ">
            <div className=" copy">
                <p className=" opacity-80">© 2026 KeenKeeper. All rights reserved.</p>
            </div>
            <div className="opacity-80 flex gap-5">
                <p className="">Privacy Policy</p>
                <p className="">Cookies</p>
                <p className="">Terms of Service</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;