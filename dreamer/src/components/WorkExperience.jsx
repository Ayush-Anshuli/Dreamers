import React from 'react'
import InputFields from './InputFields'

function WorkExperience({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2 text-primary'>Work Experience</h4>
        <div>
          <label className='sidebar-label-container'>
            <input
              type='radio'
              name='test'
              id='all'
              value={"all"}
              onChange={handleChange}
            />
            <span className='checkmark'></span>Any experience
          </label>
          <InputFields handleChange={handleChange} value="Internship" title={"Internship"} name={"test"} />
          <InputFields handleChange={handleChange} value="Work remotely" title={"Work remotely"} name={"test"} />
          <InputFields handleChange={handleChange} value="Full-time" title={"Full-time"} name={"test"} />
        </div>
      </div>
  )
}

export default WorkExperience