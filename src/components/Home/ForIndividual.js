import React from 'react'
import indi from "../../assets/Mask group (1).svg"
import person from "../../assets/Group 27.svg"
import PersonM from "../../assets/Mask group (6).svg"


const ForIndividual = () => {
  return (
    <div>
         {/* desktop start*/}
         <div className="md:block hidden w-full h-full  ">
        <div className="grid md:grid-cols-2  md:justify-between">
          <div className="flex flex-col md:text-left text-center justify-center md:items-start w-full max-w-2xl ">
           <img src={person} alt="/" />
           <h3 className=" md:text-[24px] text-[#571340] font-[600] py-2 ">For Individuals</h3>

<h6 className="text-[#667085] text-[16px] font-[400] max-w-[465px] ">
  {" "}
  Empowering individuals to take charge of their health and wellness. Our health tech solutions provide easy access to personal health information, telemedicine options, and personalized health recommendations, giving you the tools you need to live your best life.
</h6>
          </div>
          <div className="">
            <img className="" src={indi} alt="/" />
          </div>
        </div>
      </div>
      {/* desktop end*/}

         {/* mobile start*/}
         <div className="block md:hidden w-full h-full ">
        <div className="grid md:grid-cols-2  md:px-20 pt-10 md:pt-[40px] justify-center md:justify-between">
          <div className="flex flex-col  text-center justify-center items-center w-full">
          <div className="flex justify-center items-center">
          <img src={person} alt="/" />

          </div>
          <h3 className="text-[20px] text-[#571340] font-[600] py-3 ">For Individuals</h3>

            <div className="flex justify-center items-center">
              <img className="" src={PersonM} alt="/" />
            </div>
            <h6 className="text-[#667085] text-[14px] pt-2 font-[400] max-w-[316px] ">
              {" "}
              Empowering individuals to take charge of their health and wellness. Our health tech solutions provide easy access to personal health information, telemedicine options, and personalized health recommendations, giving you the tools you need to live your best life.
            </h6>
          </div>
        </div>
      </div>
      {/* mobile end */}
    </div>
  )
}

export default ForIndividual
