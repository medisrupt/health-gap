import React from 'react'
import arrow from "../../assets/arrow-right.svg"
import i from "../../assets/Frame 44.png"
const Hero = () => {
  return (
    <div>
       <div className="text-center pb-10">
       <div className="px-5 md:px-20 text-center">
       <div className=" mt-[50px]  flex flex-col justify-center items-center">
        <div className='flex md:gap-3 bg-[#FFEEFA] mb-2 rounded-[16px] py-1 pl-1 pr-2'>
            <div className='text-[#BA6B99] text-[14px] bg-[#FFFFFF] rounded-[16px] px-[10px] py-[2px] '>
Coming soon
            </div>
            <div className='flex '>
            <div className='text-[#BA6B99] text-[14px]  px-[5px] md:px-[10px] py-[2px] '>
            HealthGap Africa Labs
            </div>
            <img src={arrow} alt="/" />
            </div>

        </div>
       <h2 className="md:text-[50px]  text-[38px] font-[700]  text-[#294A4A]  pb-5 text-center ">
       A better way to Healthcare
</h2>
<h5 className='text-[#667085] mb-7 md:text-[20px] text-[12px] md:leading-[30px] max-w-[768px] font-[400]  '>
We’re HealthGap, home to a family of products that lay the groundwork for a better healthcare experience across Africa.
</h5>
<div className='md:flex hidden gap-3 mb-20 '>

         <div className=''>
         <button
           
           className="px-8  w-full rounded-[8px] py-4 text-white bg-[#72AC5A]"
         >
           Check out our products
         </button>
         </div>
         <div>
         <button
            target="_blank"
            className="border-[#000000]  w-full px-16 rounded-[8px] py-4 border-[1px] text-[#819B9B] bg-[#F0FFFF] "
            // whileHover={{
            //   scale: 1.1,
            //   textShadow: "0px 0px 8px rgb(255,255,255)",
            // }}
          >
            Get in touch
          </button>
         </div>
</div>

<div className='md:hidden block w-full gap-y-3'>

         <div className='mb-4'>
         <button
           
           className="px-8  w-full rounded-[8px] py-4 text-white bg-[#72AC5A]"
         >
           Check out our products
         </button>
         </div>
         <div>
         <button
            target="_blank"
            className="border-[#000000]  w-full px-16 rounded-[8px] py-4 border-[1px] text-[#819B9B] bg-[#F0FFFF] "
            // whileHover={{
            //   scale: 1.1,
            //   textShadow: "0px 0px 8px rgb(255,255,255)",
            // }}
          >
            Get in touch
          </button>
         </div>
</div>

<div>
    
</div>
</div>
       </div>
       </div>
       <img src={i} alt="/" />

    </div>
  )
}

export default Hero
