import Image from 'next/image'
import React from 'react'
import Upload from '../../public/assets/upload.png';


const UploadIcon = () => {
  return (
    <Image src={Upload} alt="Upload icon"/>
  )
}

export default UploadIcon