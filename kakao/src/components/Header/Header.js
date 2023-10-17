import React, { useEffect } from 'react'
import banner from '../../photo/banner_video.mp4'
import '../../App.css'
import '../Header/Header.css'
import Navbar from '../Navbar/Navbar.js'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Header() {

  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
  return (
    <>
    <Navbar />
      <div className='Header_section'>
          <div className='Header_section_banner'>
              <video  src={banner } autoPlay muted loop   className='video_banner'/> 
              <span className='Banner_opacity'></span>
          </div>

          <div className='Header_text' data-aos='fade-up'>
              <div className='Header_text_middle'>
                  <h1>YOUR VIDEO WORLD</h1>
                  <p>Welcome to Kakao, the ultimate video streaming platform designed to elevate your entertainment experience. Enjoy the show!</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Header