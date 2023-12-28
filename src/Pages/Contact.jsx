import React from "react";
import ContactForm from "../Component/ContactForm";
import ContactUpperContainer from "../Component/ContactUpperContainer";
import CommonHeroSection from "../Component/CommonHeroSection";
import image1 from "../Assects/contact-banner.gif";

const Contact = () => {
  return (
    <div className="Full-ContactUs-container">
      <CommonHeroSection
        name="CONTACT-US"
        image={image1}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            accusantium sunt, sapiente nisi consequatur in harum voluptatum necessitatibus
            . Lorem ipsum dolor sit amet consectetur,adipisicing elit.Ad sequi sunt
             laudantium accusantium id!"
      />

      <ContactForm />

      <ContactUpperContainer />

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14135.205003093288!2d84.44872818238812!3d27.661620199941552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfutsal%20in%20chitwan!5e0!3m2!1sen!2snp!4v1680695104630!5m2!1sen!2snp" 
    width="100%" height="450" style={{border:0  }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='AboutUs-googleMap'></iframe> */}
    </div>
  );
};

export default Contact;
