import React from 'react'

function Buttons({onClickHandler, value, title}) {
  return (
    <div onClick={onClickHandler} value={value} className='px-4 py-1 text-base hover:bg-blue hover:text-white cursor-pointer'>
        {title}
    </div>
  )
}

export default Buttons