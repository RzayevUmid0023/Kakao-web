import React, { useEffect } from 'react'
import './Recentwork.css'
import BigVideo from '../../photo/Recentwork-Big.mp4'
import FirstVideo from '../../photo/Recentwork-first.mp4'
import SecondVideo from '../../photo/Recentwork-second.mp4'
import ThirdVideo from '../../photo/Recentwork-third.mp4'


import Aos from 'aos'
import 'aos/dist/aos.css'


function Recentwork() {

  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])

  return (
    <>
    <div className='Recentwork_section'>
        <div className='Recentwork_section_middle'>
            <div className='Recentwork-left'>
              <div className='left-video' data-aos='fade-up'>
                <video  src={BigVideo } autoPlay muted loop />  
              </div>
            </div>

            <div className='Recentwork-right '>
              <div className='Recentwork-right-first Recentwork-child' data-aos='fade-up'>
                    <h5 className='small-header'>/Best Recent Work</h5>
                    <h3 className='big-header'>Creating An Effective Video Ad Campagin</h3>
                    <div className='video' >
                      <video  src={FirstVideo } autoPlay muted loop />  

                    </div>
                    <p>Step into a captivating realm of digital creativity, where video artistry knows no bounds. Welcome to Kakao, your gateway to a mesmerizing collection of video masterpieces.</p>

                    <button className='Recentwork-button'>Learn More</button>
              </div>

              <div className='Recentwork-right-second Recentwork-child' data-aos='fade-up'>
              <h5 className='small-header'>/Best Recent Work</h5>
                    <h3 className='big-header'>Best Technologies In Video Production</h3>
                    <div className='video'>
                      <video  src={SecondVideo } autoPlay muted loop />  

                    </div>
                    <p>Step into a captivating realm of digital creativity, where video artistry knows no bounds. Welcome to Kakao, your gateway to a mesmerizing collection of video masterpieces.</p>

                    <button className='Recentwork-button'>Learn More</button>
              </div>
              <div className='Recentwork-right-third Recentwork-child' data-aos='fade-up'>
              <h5 className='small-header'>/Best Recent Work</h5>
                    <h3 className='big-header'>Creation Of Dynamic Visual Transitions</h3>
                    <div className='video'>
                      <video  src={ThirdVideo } autoPlay muted loop />  

                    </div>
                    <p>Step into a captivating realm of digital creativity, where video artistry knows no bounds. Welcome to Kakao, your gateway to a mesmerizing collection of video masterpieces.</p>

                    
                      <button className='Recentwork-button'>Learn More</button>
                    
              </div>

            </div>

        </div>

    </div>


    
    
    </>
  )
}

export default Recentwork