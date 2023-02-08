import React from 'react'
import arrow from "../../assets/arrow-right.svg"
import Background from "../../assets/Rectangle 22.svg"


const LabsHero = () => {
  return (
    <div className='text-center h-screen md:pt-20 bg-hero bg-no-repeat bg-cover bg-center bg-mt-5'
    // style={{ backgroundImage: `url(${Background})` }}
    >
       <div className="px-5 md:px-20 text-center">
       <div className=" pt-[50px]  flex flex-col justify-center items-center">
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
        <h2 className="md:text-[64px]  text-[36px] font-[700]  text-[#294A4A]  pb-5 text-center ">
        Africas’s Largest Health TechHub
</h2>
<h5 className='text-[#667085] mb-7 md:text-[20px] text-[18px] md:leading-[30px] md:max-w-[768px] max-w-[343px] font-[400]  '>
Our goal is to build a network of interconnected tech hubs across the continent, providing a hub for collaboration, knowledge-sharing, and community building.
</h5>
      </div>
      {/* <div>
        <form className='md:flex  justify-center gap-4'>
            <input type="email"
            placeholder='Enter your Email'
            className='bg-[#F0FFFF]   border-[1px] border-[#000000] rounded-[8px] md:w-[575px] w-full  h-[60px] text-center flex justify-center items-center ' />
       <button
       type="submit"
       className='bg-[#72AC5A] md:mt-0 mt-4 text-[#FFFFFF] rounded-[8px] md:w-[356px] w-full h-[60px]' 
       >Know when we are in your city</button>
        </form>
      </div> */}
      </div>
    </div>
  )
}

export default LabsHero
