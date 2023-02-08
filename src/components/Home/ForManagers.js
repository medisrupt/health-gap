import React from 'react'
import org from "../../assets/Mask group (4).svg"
import icon from "../../assets/Group 24.svg"
import manageM from "../../assets/Mask group (9).svg"


const ForManagers = () => {
  return (
    <div>
        {/* desktop start*/}
    <div className="md:block hidden w-full h-full  py-8 ">
    <div className="grid md:grid-cols-2 gap-10 ">
      <div className="">
        <img className="" src={org} alt="/" />
      </div>

      <div className="flex flex-col text-center md:text-left justify-center md:items-start w-full  ">
        <img src={icon} alt="/" />
        <h3 className=" md:text-[24px] text-[#571340] font-[600] py-2 ">For Managers</h3>

        <h6 className="text-[#667085] text-[16px] font-[400] max-w-[477px] ">
          {" "}
          Streamlining healthcare management for managers with our cutting-edge health tech solutions. Our platform offers a range of tools for tracking and analyzing employee health data, managing healthcare costs, and ensuring compliance with regulations, giving managers the tools they need to make informed healthcare decisions for their organization.
        </h6>
        
      </div>
    </div>
  </div>
  {/* desktop end*/}

    {/* mobile start*/}
    <div className="block md:hidden w-full h-full ">
        <div className="grid md:grid-cols-2 md:px-20 pt-10 md:pt-[40px] justify-center md:justify-between">
          <div className="flex flex-col  text-center justify-center items-center w-full ">
          <div className="flex justify-center items-center">
          <img src={icon} alt="/" />

          </div>
          <h3 className="text-[20px] text-[#571340] font-[600] py-3 ">For Managers</h3>

            <div className="flex justify-center items-center">
              <img className="" src={manageM} alt="/" />
            </div>
            <h6 className="text-[#667085] text-[14px] pt-2 font-[400] max-w-[325px] ">
              {" "}
              Streamlining healthcare management for managers with our cutting-edge health tech solutions. Our platform offers a range of tools for tracking and analyzing employee health data, managing healthcare costs, and ensuring compliance with regulations, giving managers the tools they need to make informed healthcare decisions for their organization.
            </h6>
          </div>
        </div>
      </div>
      {/* mobile end */}
    </div>
  )
}

export default ForManagers
