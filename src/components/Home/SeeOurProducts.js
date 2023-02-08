import React from "react";
import hot from "../../assets/Framehot.svg"
import med from "../../assets/FrameMedistrut.svg"
import spit from "../../assets/FrameSpit.svg"



const SeeOurProducts = () => {
  return (
    <div id="product">
      <div className="w-full h-full mt-8 ">
        <div className="pb-4 ">
          <div className="flex flex-col text-center  justify-center items-center py-10 w-full ">
            <h6 className="text-[#BA6B99] text-[16px] font-[600]  ">
              Products
            </h6>
            <h4 className="text-[#294A4A] text-[36px] font-[600] py-2 ">
              See our products{" "}
            </h4>
            <h6 className="text-[#667085] text-[20px] font-[400] max-w-[768px] ">
              Explore the full range of our health tech solutions and see how we
              are revolutionizing healthcare for patients, providers,
              organizations and everyone
            </h6>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className=" py-20 bg-[#FFF9FD] rounded-[12px]  ">
            <div className="w-full flex flex-col text-center justify-center ">
             <div className="flex justify-center">
             <img className="w-20 h-20" src={hot} alt="/" />
             </div>
            <div className="flex justify-center">
            <h6 className="text-[#667085] text-[16px] px-1 font-[400] max-w-[314px] pb-10">
                Medisrupt is an EHR solution that digitize patient records, make
                them accessible to authorized healthcare providers, improve care
                coordination, treatment progress, and patient outcomes.
              </h6>
            </div>
            
            </div>
            <div className="flex justify-center">
            <button className="px-10 rounded-[8px] py-3 text-[#FFFFFF] bg-[#72AC5A]">
                Learn about Hoot
              </button>
            </div>
          </div>

          <div className="justify-center py-20 bg-[#FFF9FD] rounded-[12px]  ">
            <div className="w-full flex flex-col text-center justify-center ">
            <div className="flex justify-center">
             <img className="" src={med} alt="/" />
             </div>
             <div className="flex pt-10 justify-center">
             <h6 className="text-[#667085] text-[16px] px-1 font-[400] max-w-[314px] pb-10">
              Medisrupt is an EHR solution that digitize patient records, make them accessible to authorized healthcare providers, improve care coordination, treatment progress, and patient outcomes.
              </h6>
             </div>
              
            </div>
            <div className="flex justify-center ">
           <button className="px-6 rounded-[8px] py-3 text-[#FFFFFF] bg-[#72AC5A]">
                Learn about Medisrupt
              </button>
           </div>
          </div>

          <div className="justify-center py-20 bg-[#FFF9FD] rounded-[12px]  ">
            <div className="w-full flex flex-col text-center justify-center ">
            <div className="flex justify-center">
             <img className="w-20 h-20" src={spit} alt="/" />
             </div>
             <div className="flex justify-center">
             <h6 className="text-[#667085] text-[16px] px-1 font-[400] max-w-[314px] pb-10">
              Spit provides managers with real-time insights into employee mental health, absenteeism,
               and overall productivity, enabling them to make informed decisions and 
               support their team's well-being.
              </h6>
             </div>
             
            </div>
           <div className="flex justify-center ">
           <button className="px-10 rounded-[8px] py-3 text-[#FFFFFF] bg-[#72AC5A]">
                Learn about Spit
              </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOurProducts;
