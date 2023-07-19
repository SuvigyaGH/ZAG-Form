import Image from 'next/image'
import React from 'react'
import Email from '../../public/assets/email.png';


const EmailIcon = () => {
  return (
    <Image src={Email} alt="Email icon"/>
  )
}

export default EmailIcon