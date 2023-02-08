import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar'
import Hero from '../../components/Home/Hero'
import LabsHero from '../../components/Labs/LabsHero'

const Labs = () => {
  return (
    <>
    <div className=' bg-gradient-to-b from-[#72AC5A]/[12%] to-[#FF3E49]/[3%]'>
    <Navbar />
    <LabsHero />
    </div>
    {/* <HeroCenter /> */}
    {/* <div className="flex justify-center">
       <div className='max-w-[1500px] w-full'>
         <div className="md:py-10 h-full px-5 md:px-0 md:mx-32">
         
           
         </div>
       
       </div>
     </div> */}
     {/* <GetFirst /> */}
     {/* <Footer /> */}
   </>
  )
}

export default Labs
