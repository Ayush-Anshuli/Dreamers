import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";


function Card({ data }) {
  const {
    _id,
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    employmentType,
    description
  } = data

  

  return (
    <section className='bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow border mb-5'>
      <Link to={`/details/${_id}`} className='flex gap-4 items-start'>
        {/* Company Logo */}
        <img
          src={companyLogo}
          className='h-12 w-12 object-cover rounded-md'
          alt='Company Logo'
        />
        {/* Job Details */}
        <div className='flex-1'>
          {/* Company Name and Job Title */}
          <h4 className='text-sm text-gray-500'>{companyName}</h4>
          <h3 className='text-lg font-semibold text-gray-800'>{jobTitle}</h3>

          {/* Job Metadata */}
          <div className='flex flex-wrap text-sm text-gray-600 mt-2'>
            <div className='flex items-center mr-4'>
              <span className='material-icons text-gray-400 mr-1'><span>{<FaLocationDot/>}</span></span>
              {jobLocation}
            </div>
            <div className='flex items-center mr-4'>
              <span className='material-icons text-gray-400 mr-1'><FaRegClock/></span>
              {employmentType}
            </div>
            <div className='flex items-center mr-4'>
              <span className='material-icons text-gray-400 mr-1'>$</span>
              {minPrice} - {maxPrice} {salaryType}
            </div>
            <div className='flex items-center'>
              <span className='material-icons text-gray-400 mr-1'><MdDateRange/></span>
              {postingDate}
            </div>
          </div>

          {/* Job Description */}
          <p className='text-sm text-gray-500 mt-3 line-clamp-2'>
            {description}
          </p>
        </div>
      </Link>
    </section>
  )
}

export default Card
