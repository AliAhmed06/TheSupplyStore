"use client";
import React, { useState } from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import RightItems from './RightItems'
import Image from 'next/image';
import Link from 'next/link';
import SimpleNavbarItem from './SimpleNavbarItem';


const Navbar = () => {
const [mobileNavbar , setMobileNavbar] = useState(false);
  return (
    <div className={` w-full bg-black  text-white flex flex-col items-center justify-start
                    ${mobileNavbar && 'h-screen '} `}>
        {/* Navbar Header */}
        <div className={`w-[95%] mx-auto h-[120px] flex items-center justify-center 
                        lg:w-[80%]
                        `} >
            <div className='flex items-center justify-between w-full'>
              <Logo />
              <SearchBar />
              <RightItems />
              {/* For Mobile Menu */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setMobileNavbar(!mobileNavbar)}
                >
                  {mobileNavbar ? (
                    <Image src="/images/cross-icon.jpg" width={40} height={40} alt="logo" />
                  ) : (
                    <Image
                      src="/images/hamburgere-icon.jpg"
                      width={40}
                      height={40}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
        </div>
        {/* Navbar Menu */}
        <div className={`w-full border-t border-gray1 mt-5 h-full flex-1 
                        ${mobileNavbar ? 'block' : 'hidden' } md:block`}>
          <div className={`w-[95%] mx-auto flex flex-col items-center justify-between gap-5 h-full  
                        lg:w-[80%] md:flex-row                        
                        `}>
            <div className={`h-full flex gap-5 
                            ${mobileNavbar ? 'items-center justify-center flex-col w-full':'items-start justify-start flex-row'}`}>
              <SimpleNavbarItem mobileNavbar={mobileNavbar} title="Home" link="/test" />              
              <SimpleNavbarItem mobileNavbar={mobileNavbar} title="Shop" link="#" />              
              <SimpleNavbarItem mobileNavbar={mobileNavbar} title="Media" link="#" />              
              <SimpleNavbarItem mobileNavbar={mobileNavbar} title="About Us" link="#" />              
              <SimpleNavbarItem mobileNavbar={mobileNavbar} title="Contact Us" link="#" />              
            </div>
            <div>
              <p>Call Us : 718-278-8479</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar