import React from 'react'
import Health from "../../assets/Mask group.svg"
import HealthM from "../../assets/Mask group (5).svg"
import icon from "../../assets/Group 28.svg"

const ForHealth = () => {
  return (
    <div>
        {/* desktop start*/}
        <div className="md:block hidden w-full h-full  py-8 ">
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="">
            <img className="" src={Health} alt="/" />
          </div>

          <div className="flex flex-col text-center md:text-left justify-center md:items-start w-full  ">
            <img src={icon} alt="/" />
            <h3 className=" md:text-[24px] text-[#571340] font-[600] py-2 ">For Health institutions</h3>

            <h6 className="text-[#667085] text-[16px] font-[400] max-w-[477px] ">
              {" "}
              Elevating healthcare delivery for institutions with our advanced health tech solutions. Streamlining processes, increasing efficiency, and providing better care for patients - our platform is the ultimate solution for any health institution
            </h6>
            
          </div>
        </div>
      </div>
      {/* desktop end*/}

        {/* mobile start*/}
        <div className="block md:hidden w-full h-full ">
        <div className="grid md:grid-cols-2 md:px-20 pt-4 md:pt-[40px] justify-center md:justify-between">
          <div className="flex flex-col  text-center justify-center items-center w-full  ">
          <div className="flex justify-center items-center">
          <img src={icon} alt="/" />

          </div>
          <h3 className="text-[20px] text-[#571340] font-[600] py-3 ">For Health institutions</h3>

            <div className="flex justify-center items-center">
              <img className="" src={HealthM} alt="/" />
            </div>
            <h6 className="text-[#667085] text-[14px] pt-2 font-[400] max-w-[306px] ">
              {" "}
              Elevating healthcare delivery for institutions with our advanced health tech solutions. Streamlining processes, increasing efficiency, and providing better care for patients - our platform is the ultimate solution for any health institution
            </h6>
          </div>
        </div>
      </div>
      {/* mobile end */}
    </div>
  )
}

export default ForHealth
