import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Header/Navbar'
import ForCare from '../../components/Home/ForCare'
import ForHealth from '../../components/Home/ForHealth'
import ForIndividual from '../../components/Home/ForIndividual'
import ForManagers from '../../components/Home/ForManagers'
import ForOrganization from '../../components/Home/ForOrganization'
import GetFirst from '../../components/Home/GetFirst'
import Hero from '../../components/Home/Hero'
import HeroCenter from '../../components/Home/HeroCenter'
import ItsHealthCare from '../../components/Home/ItsHealthCare'
import SeeOurProducts from '../../components/Home/SeeOurProducts'

const Home = () => {
  return (
    <>
     <div className='bg-[#F4FFFF]'>
     <Navbar />
      <Hero />
     </div>
     <HeroCenter />
     <div className="flex justify-center">
        <div className='max-w-[1500px] w-full'>
          <div className="md:py-10 h-full px-5 md:px-0 md:mx-32">
            <ForHealth />
            <ForIndividual />
            <ForOrganization />
            <ForCare />
            <ForManagers />
            <ItsHealthCare />
            <SeeOurProducts />
          </div>
        
        </div>
      </div>
      <GetFirst />
      <Footer />
    </>
  )
}

export default Home
