import React from 'react'
import './ContactInfo.css'
import ContactBox from '../ContactBox/ContactBox'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';




function ContactInfo() {
  return (
    <div>
      <ContactBox img={<LocationOnIcon/>} h3='Adress: ' p='Shiraz kooche hafez'/>
      <ContactBox img={<EmailIcon/>} h3='Email: ' p='elotfi51@gmail.com'/>
      <ContactBox img={<SmartphoneIcon/>} h3='Phone Number: ' p='0123456789'/>
    </div>
  )
}

export default ContactInfo