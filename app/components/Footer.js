import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-[#5747a8] text-white border-t-2 border-first relative'>
      <div className='w-[80%] mx-auto py-10'>
        <div className='bg-second p-7 mx-auto flex flex-col items-center justify-between gap-5 mt-[-100px] 
                        lg:w-[60%] '>
          <h3 className='text-3xl font-semibold text-white'>Subscribe to Our Newsletter</h3>
          <div className='w-full lg:px-10 flex flex-col md:flex-row items-center justify-center gap-5'>
            <input type="text" placeholder='Email' className='bg-transparent py-2 px-5 text-white rounded-md outline-none border border-gray1 focus:border-white placeholder-white' />
            <button className='bg-white py-3 px-5 rounded-md hover:opacity-80 text-second font-semibold text-sm'>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className='bg-[#5747a8] grid grid-cols-1 gap-20 items-start pt-10 
                        md:grid-cols-2 lg:grid-cols-4 lg:gap-10'>
          {/* <img src="/images/footer/footer-building.png" className='absolute right-0 bottom-0 hidden lg:block h-[320px]' alt="" /> */}
          <div className='flex flex-col items-center justify-center gap-10'>
            <img src="/images/logo2.png" alt="logo" className='h-[120px]' />
            <p className='text-justify'>At vero eos et accusamus et iusto odio dignissimods ducimus qui blanditiis huii.</p>
            <div className='flex gap-5'>
              <Link href={"#"}><img src="/images/footer/visa.PNG" alt="" className='h-[40px]' /></Link>
              <Link href={"#"}><img src="/images/footer/master-card.PNG" alt="" className='h-[40px]' /></Link>
              <Link href={"#"}><img src="/images/footer/paypal.PNG" alt="" className='h-[40px]' /></Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Contact Us</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>
              <Link href={"#"} className=' hover:text-first' >18-07 Astoria Boulevard <br/> Long Island City, NY 11102</Link>
              <Link href={"#"} className=' hover:text-first'>718-278-8479</Link>
              <Link href={"#"} className='hover:text-first' >orders@rrgeneralsupply.com</Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Our Services</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>              
              <Link href={"#"} className=' hover:text-first'>Your Account</Link>
              <Link href={"#"} className=' hover:text-first'>Return Center</Link>
              <Link href={"#"} className=' hover:text-first'>Purchase</Link>
              <Link href={"#"} className=' hover:text-first'>App Download</Link>
              <Link href={"#"} className=' hover:text-first'>Latest News</Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Information</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>
              <Link href={"#"} className=' hover:text-first' >About Us</Link>
              <Link href={"#"} className=' hover:text-first' >Contact Us</Link>
              <Link href={"#"} className=' hover:text-first' >Terms & Conditions</Link>
              <Link href={"#"} className=' hover:text-first' >Returns & Exchanges</Link>
              <Link href={"#"} className=' hover:text-first' >Shipping & Delivery</Link>
            </div>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Footer