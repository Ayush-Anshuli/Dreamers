import React from 'react'
import InputFields from './InputFields'

function Location({ handleChange }) {
    return (
      <div>
        <h4 className='text-lg font-medium mb-2 text-primary'>Location</h4>
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
          <InputFields handleChange={handleChange} value="London" title={"London"} name={"test"} />
          <InputFields handleChange={handleChange} value="Boston" title={"Boston"} name={"test"} />
          <InputFields handleChange={handleChange} value="India" title={"India"} name={"test"} />
          <InputFields handleChange={handleChange} value="Seattle" title={"Seattle"} name={"test"} />
          <InputFields handleChange={handleChange} value="San Francisco" title={"San Francisco"} name={"test"} />
          <InputFields handleChange={handleChange} value="Brazil" title={"Brazil"} name={"test"} />
          <InputFields handleChange={handleChange} value="USA" title={"USA"} name={"test"} />
        </div>
      </div>
    )
  }
  
export default Location