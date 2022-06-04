import React from 'react'
import { BsFacebook as FacebookIcon, BsYoutube as YoutubeIcon, BsTwitter as TwitterIcon, BsInstagram as InstagramIcon } from "react-icons/bs";
import { logo } from '../../../assets';
import './footer.scss';


const Footer = () => {
  return (
    <div className='footer-wrap'>
        <div className='brand-wrap'>
             <img src={logo} alt='logo' className='logo-react'/>
             <p>React Blog Practice</p>
        </div>

        <div className='credit-wrap'>
            <p>Created by Mohamad Faid Fadjri</p>
            <div className='icon-wrap'>
                <FacebookIcon />
                <YoutubeIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    </div>
  )
}

export default Footer