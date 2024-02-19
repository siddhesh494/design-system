import React from 'react'
import HamBarIcon from '../assests/PNG/MENU.png'
import LogoIcon from '../assests/PNG//LOGO.png'
import LogoMiniIcon from '../assests/PNG/LOGOMINI.png'
import DropdownIcon from '../assests/PNG/Dropdown.png'
import NavBackgroundImage from '../assests/SVG/nav-background.svg'



const Navbar = () => {
  return (
    <div>

      <div className='bg-black'>
        {/* first section */}
        <div  className='flex items-center justify-between px-16 max-xmd:px-5 max-xmd:py-4'>

          {/* logo section */}
          <div className=' flex items-center'>
            <div className='max-xsm:hidden'>
              <img
                src={HamBarIcon}
                alt='hambar'
              />
            </div>
            <div className='max-xmd:hidden'>
              <img
                src={LogoIcon}
                alt='hambar'
              />
            </div>
            <div className='xmd:hidden ml-3'>
              <img
                src={LogoMiniIcon}
                alt='hambar'
              />
            </div>
          </div>
          {/* small logo */}
          

          {/* combine button section */}
          <div className='max-xmd:hidden p-[4px] bg-[#333333] rounded-[100px] flex'>
            <div
              className='py-[11px] px-[32px] rounded-[100px]'
            >
              <button className='text-white'>The Company</button>
            </div>
            <div
              className='flex items-center jis py-[11px] px-[32px] rounded-[100px] bg-black'
            >
              <button className='text-white mr-2'>Our Service</button>
              <img
                src={DropdownIcon}
                alt='DropdownIcon'
              />
            </div>
            <div
              className='py-[11px] px-[32px] rounded-[100px]'
            >
              <button className='text-white'>Our Expertise</button>
            </div>
            <div
              className='py-[11px] px-[32px] rounded-[100px]'
            >
              <button className='text-white'>Client Work</button>
            </div>
          </div>
          
          {/* one button section */}
          <div className='max-xsm:hidden'>
            <button 
              className='bg-transparent border border-white py-[10px] px-[32px] text-[16px] rounded-full text-white'
            >Engage Us</button>
          </div>

          <div className='xsm:hidden'>
            <img
              src={HamBarIcon}
              alt='hambar'
            />
          </div>

        </div>
        
        <hr className='border-[#333333]'/>

        {/* Section section */}
        <div className='
          px-16 py-20 max-sm:p-10 max-xsm:py-8 
          flex flex-col items-center
          max-sm:items-start max-xsm:items-start 
          
          gap-[16px] sm:gap-[16px] xmd:gap-[24px] md:gap-[32px] lg:gap-[40px]'>
          <div>
            <h1 className='
              text-white navbar-head 
              text-[30px] sm:text-[40px] xmd:text-[48px] md:text-[74px]'
            >Design Systems for scale</h1>
          </div>
              
          <div className='sm:w-[50%] sm:text-center '>
            <span className='
              navbar-subhead 
              text-[18px] sm:text-[20px] xmd:text-[28px] md:text-[32px] lg:text-[36px]'>
            Add consistency to the scaling up of User Experience with an organized 
  assembly of guidelines, components and documentation.
            </span>
          </div>
        </div>
      </div>

      {/* image */}
      <div>
        <img 
          src={NavBackgroundImage}
          alt={"bgImage"}
          className='nav-bg-image'
        />
      </div>
    </div>

  )
}
export default Navbar

// border-bottom: 1px solid #333333