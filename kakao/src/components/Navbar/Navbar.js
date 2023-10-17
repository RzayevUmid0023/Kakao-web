import React from 'react'
import './Navbar.css'
import { FiArrowUpRight } from 'react-icons/fi';
import { TiThMenu } from 'react-icons/ti';


import Logo from '../../photo/Kakao Logo.svg'

function Navbar() {
  return (
    <>
     <div className='Navbar_section'>
        <div className='Navbar_section_middle'>
            <div className='Navbar_left'>
                <img src={Logo} />
                <div className='Links'>
                    <ul>
                        <li><a>Demos</a></li>
                        <li><a>Company</a></li>
                        <li><a>Works</a></li>
                        <li><a>Blog</a></li>
                        <li><a>All Pages</a></li>

                    </ul>
                </div>
            </div>
            <div className='Navbar_right'>
                <span>
                    <button>GET IN TOUCH <FiArrowUpRight /></button>
                </span>
                
            </div>

            <div className='Menu-icon'>
                <button><TiThMenu/></button>
            </div>

        </div>

     </div>

     
    </>
  )
}

export default Navbar