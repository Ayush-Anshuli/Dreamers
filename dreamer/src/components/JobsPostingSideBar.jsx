import React from 'react'
import InputFields from './InputFields'

function JobsPostingSideBar({handleChange}) {
    const now = new Date()
    const lastHours = new Date(now - 24*60*60*1000)
    const weekDays = new Date(now - 7*24*60*60*1000)
    const monthlydays = new Date(now - 30 * 24 * 60 * 60 * 1000)

    const convertedlasthour = lastHours.toISOString().slice(0.10)
    const convertedweekdays = weekDays.toISOString().slice(0,10)
    const convertedmonthlydays = monthlydays.toISOString().slice(0,10)
  return (
    <div>
    <h4 className='text-lg font-medium mb-2 text-primary'>Date of Posting</h4>
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
      <InputFields handleChange={handleChange} value={convertedlasthour} title={"Last 24 Hours"} name={"test"} />
      <InputFields handleChange={handleChange} value={convertedweekdays} title={"Last 7 days"} name={"test"} />
      <InputFields handleChange={handleChange} value={convertedmonthlydays} title={"Last Month"} name={"test"} />

    </div>
  </div>
  )
}

export default JobsPostingSideBar