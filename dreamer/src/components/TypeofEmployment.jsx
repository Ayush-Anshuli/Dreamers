import React from 'react'
import InputFields from './InputFields'

function TypeofEmployment({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2 text-primary'>Types of Employment</h4>
        <div>
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
          <InputFields handleChange={handleChange} value="Part-time" title={"Part-time"} name={"test"} />
          <InputFields handleChange={handleChange} value="Full-time" title={"Full-time"} name={"test"} />
          <InputFields handleChange={handleChange} value="Temporary" title={"Temporary"} name={"test"} />
          {/* <InputFields handleChange={handleChange} value="Seattle" title={"Seattle"} name={"test"} /> */}
        </div>
      </div>
  )
}

export default TypeofEmployment