import React, { useState } from 'react';
import Location from './Location';
import Salary from './Salary';
import JobsPostingSideBar from './JobsPostingSideBar';
import WorkExperience from './WorkExperience';
import TypeofEmployment from './TypeofEmployment';

function SidebarLeft({ handleChange, handleClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    location: false,
    salary: false,
    jobPosting: false,
    workExperience: false,
    employmentType: false,
  });

  const toggleDropdown = (filterName) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>

      {/* Location Filter */}
      <div className="filter-group">
        <div
          className="cursor-pointer mb-2 flex items-center justify-between"
          onClick={() => toggleDropdown('location')}
        >
          <span>Location</span>
          <span className="text-gray-500">{isDropdownOpen.location ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen.location && <Location handleChange={handleChange} />}
      </div>

      {/* Salary Filter */}
      <div className="filter-group">
        <div
          className="cursor-pointer mb-2 flex items-center justify-between"
          onClick={() => toggleDropdown('salary')}
        >
          <span>Salary</span>
          <span className="text-gray-500">{isDropdownOpen.salary ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen.salary && <Salary handleChange={handleChange} handleClick={handleClick} />}
      </div>

      {/* Job Posting Filter */}
      <div className="filter-group">
        <div
          className="cursor-pointer mb-2 flex items-center justify-between"
          onClick={() => toggleDropdown('jobPosting')}
        >
          <span>Job Posting</span>
          <span className="text-gray-500">{isDropdownOpen.jobPosting ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen.jobPosting && (
          <JobsPostingSideBar handleChange={handleChange} handleClick={handleClick} />
        )}
      </div>

      {/* Work Experience Filter */}
      <div className="filter-group">
        <div
          className="cursor-pointer mb-2 flex items-center justify-between"
          onClick={() => toggleDropdown('workExperience')}
        >
          <span>Work Experience</span>
          <span className="text-gray-500">{isDropdownOpen.workExperience ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen.workExperience && <WorkExperience handleChange={handleChange} />}
      </div>

      {/* Type of Employment Filter */}
      <div className="filter-group">
        <div
          className="cursor-pointer mb-2 flex items-center justify-between"
          onClick={() => toggleDropdown('employmentType')}
        >
          <span>Type of Employment</span>
          <span className="text-gray-500">{isDropdownOpen.employmentType ? '▲' : '▼'}</span>
        </div>
        {isDropdownOpen.employmentType && <TypeofEmployment handleChange={handleChange} />}
      </div>
    </div>
  );
}

export default SidebarLeft;
