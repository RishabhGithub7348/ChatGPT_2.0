import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
     <h1 className='text-5xl font-bold mb-20'>Ghat GPT</h1>
     <div className='flex space-x-2 text-center'>
       <div >
        <div className='flex flex-col items-center justify-center mb-5'>
       <SunIcon className='h-8 w-8 '/>
          <h2>Examples</h2>
        </div>

        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference a dog and a cat ?"</p>
          <p className='infoText'>"What is the color of the sun ? "</p>
        </div>
       </div>

       <div>
        <div className='flex flex-col items-center justify-center mb-5'>
       <BoltIcon className='h-8 w-8 '/>
          <h2>Capabilites</h2>
        </div>

        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference a dog and a cat ?"</p>
          <p className='infoText'>"What is the color of the sun ? "</p>
        </div>
       </div>


       <div>
        <div className='flex flex-col items-center justify-center mb-5'>
       <ExclamationTriangleIcon className='h-8 w-8 '/>
          <h2>Limitation</h2>
        </div>

        <div className='space-y-2'>
          <p className='infoText'>"Explain Something to me"</p>
          <p className='infoText'>"What is the difference a dog and a cat ?"</p>
          <p className='infoText'>"What is the color of the sun ? "</p>
        </div>
       </div>
       
     </div>
    </div>
  )
}