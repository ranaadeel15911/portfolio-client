import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div className='bg-[url(/)] lg:bg-[url(/banner_bg.jpg)] min-h-screen bg-cover'>
    <Navbar/>
    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] ">
        <div className="hidden lg:block"></div>
        <div className='text-[100px] sm:text-[130px] font-bold flex items-center justify-center leading-[1.4]'>
          
            <div>
                <p data-aos="zoom-in-up" data-aos-delay="230">I am</p>
                <p data-aos="zoom-in-up" data-aos-delay="260">Rana</p>
                <p data-aos="zoom-in-up" data-aos-delay="290">Adeel</p>
            </div>

        </div>
    </div>
        </div>
    </>
  )
}

export default Hero