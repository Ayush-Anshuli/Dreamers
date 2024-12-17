import React from 'react'
import Buttons from './Buttons'
import InputFields from './InputFields'

function Salary({handleChange,handleClick}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2 text-primary' >Salary</h4>
        <div className='flex bg-white'>
            <Buttons onClickHandler={handleClick} value="" title="Hourly" />
            <Buttons onClickHandler={handleClick} value="monthly" title="Monthly" />
            <Buttons onClickHandler={handleClick} value="yearly" title="Yearly" />
        </div>
        <label className='sidebar-label-container'>
            <input
              type='radio'
              name='test'
              id='all'
              value={"all"}
              onChange={handleChange}
            />
            <span className='checkmark'></span>All
          </label>
        <InputFields handleChange={handleChange} value={30} title={"<30000K"} name={"test"} />
          <InputFields handleChange={handleChange} value={50} title={"<500000K"} name={"test"} />
          <InputFields handleChange={handleChange} value={60} title={"<600000K"} name={"test"} />
    </div>
  )
}

export default Salary