import React from 'react'
import healthImage from "../../assets/Frame.svg"

const Footer = () => {
  return (
    <div className='bg-[#F6FBFF] w-full'>
      <div className='w-full md:py-10  px-5 md:px-[100px] '>
<div className='grid md:grid-cols-4 grid-cols-2 py-10'>
<div>
    <h5 className='text-[#98A2B3] text-[14px] font-[600] pb-2 '>Company</h5>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>About us</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Careers</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>News</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Partner with us</h4>
</div>

<div>
    <h5 className='text-[#98A2B3] text-[14px] font-[600] pb-2 '>Resources</h5>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Blog</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Newsletter</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Events</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Help centre</h4>
</div>

<div className='md:pt-0 pt-5'>
    <h5 className='text-[#98A2B3] text-[14px] font-[600] pb-2 '>Use cases</h5>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Caregivers</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Organizations</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Government</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Saas</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Individuals</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Health Institutions</h4>
</div>

<div className='md:pt-0 pt-5'>
    <h5 className='text-[#98A2B3] text-[14px] font-[600] pb-2 '>Legal</h5>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Terms</h4>
    <h4 className='text-[#667085] text-[16px] font-[600] pb-2'>Privacy Policy</h4>

</div>
</div>
<div className='bg-[#EAECF0]  mb-5'><hr /></div>
<div className='md:flex justify-between items-center pb-10'>
<img className="" src={healthImage} alt="/" />
<h5 className='text-[#98A2B3] md:pt-0 pt-2 text-[16px] font-[400] '>© 2023 HealthGap. All rights reserved.</h5>
</div>
      </div>
    </div>
  )
}

export default Footer
