import React from 'react'
import care from "../../assets/Mask group (3).svg"
import person from "../../assets/Group 25.svg"
import careM from "../../assets/Mask group (8).svg"

const ForCare = () => {
  return (
    <div>
       {/* desktop start*/}
       <div className="md:block hidden w-full h-full  ">
        <div className="grid md:grid-cols-2  md:justify-between">
          <div className="flex flex-col md:text-left text-center justify-center md:items-start w-full max-w-2xl ">
           <img src={person} alt="/" />
           <h3 className=" md:text-[24px] text-[#571340] font-[600] py-2 ">For Caregivers</h3>

<h6 className="text-[#667085] text-[16px] font-[400] max-w-[465px] ">
  {" "}
  Caring for those who care for others with our health tech solutions. Our platform offers a range of tools and resources to support caregivers, including remote monitoring, medication management, and scheduling assistance, making it easier for caregivers to provide the best care possible
</h6>
          </div>
          <div className="">
            <img className="" src={care} alt="/" />
          </div>
        </div>
      </div>
      {/* desktop end*/}

        {/* mobile start*/}
   <div className="block md:hidden w-full h-full ">
        <div className="grid md:grid-cols-2  md:px-20 pt-10 md:pt-[40px] justify-center md:justify-between">
          <div className="flex flex-col  text-center justify-center items-center w-full ">
          <div className="flex justify-center items-center">
          <img src={person} alt="/" />

          </div>
          <h3 className="text-[20px] text-[#571340] font-[600] py-3 ">For Organizations</h3>

            <div className="flex justify-center items-center">
              <img className="" src={careM} alt="/" />
            </div>
            <h6 className="text-[#667085] text-[14px] pt-2 font-[400] max-w-[325px] ">
              {" "}
              Caring for those who care for others with our health tech solutions. Our platform offers a range of tools and resources to support caregivers, including remote monitoring, medication management, and scheduling assistance, making it easier for caregivers to provide the best care possible
            </h6>
          </div>
        </div>
      </div>
      {/* mobile end */}
    </div>
  )
}

export default ForCare
