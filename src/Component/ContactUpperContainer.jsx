import React from 'react'
import "../Style/ContactUpperContainer.css"
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa'

const ContactUpperContainer = () => {
  return (
    <div className='Contact-full-container'>
        
        <div className="contact-box">
              <p className='contact-container-logo'>
                <MdEmail  className="contact-box-icon" />
                </p> 
             <p className="contact-box-container">

             rajesh44@gmail.com
              
            </p>

            <button className="contact-box-button" > Mail Us</button>
        </div>

        <div className="contact-box">
                <p className='contact-container-logo'>
                    <FaPhoneAlt  className="contact-box-icon" />
                    </p> 
                <p className="contact-box-container">
                  +9779865003266
                
                </p>

                <button className="contact-box-button" > Call Us</button>
        </div>

        <div className="contact-box">
        <p className='contact-container-logo'>
            <MdLocationOn  className="contact-box-icon" />
        </p> 

           <p className="contact-box-container">
            
            Bharatpur-7, Chitwan 
            
          </p>

          <button className="contact-box-button" > Visit Us</button>

        </div>

        <div className="contact-box">
        <p className='contact-container-logo'>
        <FaFacebookF  className="contact-box-icon" />    
        </p> 
            <p  className="contact-box-container" >
              Facebook
            
            </p>  

            <button className="contact-box-button" > Chat Us</button> 
        </div>


    </div>
  )
}

export default ContactUpperContainer