import React from 'react'

import vector from '../../assets/Vector (1).svg'
const GetFirst = () => {
  return (
    <div>
            <div className="w-full relative h-full mt-8 ">
        <div className="pb-4 relative">
          <div className="flex relative flex-col text-center  justify-center items-center py-10 w-full ">
          <h4 className="text-[#294A4A] text-[36px] font-[600]  ">
          Get firsthand notifications  
            </h4>
            <h6 className="text-[#294A4A] text-[20px] font-[400] py-8 max-w-[768px] ">
            Stay informed with our real-time notifications feature. Get firsthand updates on your health and wellness, anytime, anywhere, right in your inbox.
            </h6>
         <div className='relative'>
            <input 
            type="email"
            placeholder='Enter your email address'
            className='rounded-[100px] relative bg-[#0E3232] p-5 w-[300px] md:w-[700px]' />
            <button className='py-3 px-5 absolute bottom-3.5 md:bottom-2 right-2 bg-[#72AC5A] rounded-[100px] text-[#ffffff] text-[16px] font-[600] '>
                <p className='md:block hidden '>Subscribe Now</p>
                <img className='md:hidden block' src={vector} />
            </button>
         </div>
            
            </div>
            </div>
          </div>
    </div>
  )
}

export default GetFirst
