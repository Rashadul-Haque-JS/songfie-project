import React from 'react'

import icon from '../../assets/image/static/arrow_up.png'

import './Footer.scss'
const Footer =() =>{
  return (
    <div className='footer'>
      <div className='upperFooter'>

      </div>
       <div className='footerLinks'>
          Footer
        </div>
       <div className='footerNavigation'>
        <a href="#top"><img src={icon} alt='icon' /></a>
        </div>
    </div>
  )
}

export default Footer