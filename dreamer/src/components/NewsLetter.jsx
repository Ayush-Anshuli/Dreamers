import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa6'
import { FaRocket } from 'react-icons/fa6'
function NewsLetter() {
  return (
    <div>
        <div >
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs
            </h3>
            <p className='text-primary/75 text-base b-4'>
            Join our team and make a difference! We're hiring passionate individuals to Software DEvelopers
            </p>
            <div>
                <input type='email' name='email' id='email' placeholder='xyz@gmail.com' className='w-full block py-2 pl-3 focus:outline-none' />
                <input type='submit' value={'Subscribe'} className='w-full block py-2 pl-3 border focus:outline-none rounded
                bg-blue  text-white cursor-pointer' />
            </div>
        </div>

        <div >
            <h3 className='text-lg mt-20 font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get noticed faster
            </h3>
            <p className='text-primary/75 text-base b-4'>
            Send Us Your Resume and Subscibe to get noticed by the recruiters
            </p>
            <div>
                <input type='email' name='email' id='email' placeholder='resume link' className='w-full block py-2 pl-3 focus:outline-none' />
                <input type='submit' value={'Submit'} className='w-full block py-2 pl-3 border focus:outline-none rounded
                bg-blue  text-white cursor-pointer' />
            </div>
        </div>

    </div>
  )
}

export default NewsLetter