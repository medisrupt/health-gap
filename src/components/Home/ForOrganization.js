import React from 'react'
import org from "../../assets/Mask group (2).svg"
import orgM  from "../../assets/Mask group (7).svg"
import icon from "../../assets/Group 26.svg"


const ForOrganization = () => {
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
        <h3 className=" md:text-[24px] text-[#571340] font-[600] py-2 ">For Organizations</h3>

        <h6 className="text-[#667085] text-[16px] font-[400] max-w-[477px] ">
          {" "}
          Optimizing healthcare for organizations with our advanced health tech solutions. Our platform offers a range of tools to improve employee health and productivity, including wellness programs, and telemedicine option, helping organizations to create a healthier and more efficient workforce.
        </h6>
        
      </div>
    </div>
  </div>
  {/* desktop end*/}

   {/* mobile start*/}
   <div className="block md:hidden w-full h-full ">
        <div className="grid md:grid-cols-2  md:px-20 pt-10 md:pt-[40px] justify-center md:justify-between">
          <div className="flex flex-col  text-center justify-center items-center w-full ">
          <div className="flex justify-center items-center">
          <img src={icon} alt="/" />

          </div>
          <h3 className="text-[20px] text-[#571340] font-[600] py-3 ">For Organizations</h3>

            <div className="flex justify-center items-center">
              <img className="" src={orgM} alt="/" />
            </div>
            <h6 className="text-[#667085] text-[14px] pt-2 font-[400] max-w-[331px] ">
              {" "}
              Optimizing healthcare for organizations with our advanced health tech solutions. Our platform offers a range of tools to improve employee health and productivity, including wellness programs, and telemedicine option, helping organizations to create a healthier and more efficient workforce.
            </h6>
          </div>
        </div>
      </div>
      {/* mobile end */}
</div>
  )
}

export default ForOrganization
