import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({title,path}) {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
        <div>
            <h2 className='text-3xl text-blue font-medium text-center' >{title}</h2>
            {/* <p><Link to={'/'}>Home</Link></p> */}
        </div>
    </div>
  )
}

export default PageHeader