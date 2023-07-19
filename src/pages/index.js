import Image from 'next/image'
import { Inter } from 'next/font/google'
import SubmitForm from '@/components/Form/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div><SubmitForm/></div>
  )
}
