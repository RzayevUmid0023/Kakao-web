import React, { useEffect } from 'react'
import './Ourservices.css'
import { FiArrowDownRight } from 'react-icons/fi';
import first from './../../photo/first.mp4'
import second from './../../photo/second.mp4'
import three from './../../photo/three.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

 
function Ourservices() {

  useEffect(()=>{
    Aos.init({duration: 1500});
  },[])
 

  return (
    <div className='Ourservices_section'>
        <div className='Ourservices_section_middle'>
            <div className='one_content'>/OUR SERVICES</div>
            <div className='all_content'>
              <div className='all_content_top'>

                <div className='all_content_top_left' data-aos='fade-up'>
                    <h2>All Your Video Content Needs! Let's Create!</h2>
                </div>
                <div className='all_content_top_right'>
                  <button><FiArrowDownRight/></button>
                  </div>

              </div>
              <div className='all_content_bootom'>
                <div className='all_content_bottom_first all_content_child' data-aos='fade-up'>
                <video  src={first } autoPlay muted loop /> 
                <span>
                  <h4>Variety</h4>
                <p>Watch your favorite videos in one click.</p>

                </span>
                </div>
                <div className='all_content_bottom_second all_content_child' data-aos='fade-up'>
                <video  src={second } autoPlay muted loop /> 
                <span>
                <h4>Quality</h4>
                <p>Watch your favorite videos in one click.</p>

                </span>


                </div>
                <div className='all_content_bottom_third all_content_child' data-aos='fade-up'>
                <video  src={three } autoPlay muted loop /> 
                <span>
                <h4>Innovation</h4>
                <p>Watch your favorite videos in one click.</p>

                </span>


                </div>
              </div>

            </div>
        </div>
    </div>

   )
}

export default Ourservices;