import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobpage from './Jobpage';
import SidebarLeft from '../components/SidebarLeft';
import NewsLetter from '../components/NewsLetter';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentpage, setCurrentpage] = useState(1);
  const itemsPerpage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/all-jobs");
      const data = await res.json();

      setJobs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Filter jobs by title
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filterItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Based Filtering
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedCategory(null); // Reset the filter for "All"
    } else {
      setSelectedCategory(value); // Set the specific filter
    }
  };

  // Calculate pagination
  const calculatePage = () => {
    const startIndex = (currentpage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentpage < Math.ceil(filterItems.length / itemsPerpage)) {
      setCurrentpage(currentpage + 1);
    }
  };

  const previousPage = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };

  // Buttons based filtering
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Paginate filtered jobs
  const paginatedJobs = (jobs, startIndex, endIndex) =>
    jobs.slice(startIndex, endIndex);

  // Main filtering function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filterItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePage();
    const paginatedFilteredJobs = paginatedJobs(filteredJobs, startIndex, endIndex);

    return paginatedFilteredJobs.map((data, index) => (
      <Card key={index} data={data} />
    ));
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-blue">
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#FAFAFA] flex flex-col items-center lg:px-24 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-screen-xl">
          <div className="bg-white p-4 rounded">
            <SidebarLeft handleChange={handleChange} handleClick={handleClick} />
          </div>

          <div className="bg-white p-4 rounded col-span-2">
            {loading ? (
              <p className="font-medium">Loading...</p>
            ) : result.length > 0 ? (
              <Jobpage result={result} />
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2">
                  Jobs Found - {result.length}
                </h3>
                <p>No Data Found</p>
              </>
            )}
            {/* Pagination */}
            {result.length > 0 ? (
              <>
                <div className="flex justify-center mt-4 space-x-8">
                  <button onClick={previousPage} disabled={currentpage === 1}>Previous</button>
                  <span>
                    Page {currentpage} of {Math.ceil(filterItems.length / itemsPerpage)}
                  </span>
                  <button onClick={nextPage} disabled={currentpage === Math.ceil(filterItems.length / itemsPerpage)}>Next</button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="bg-white p-4 rounded"><NewsLetter/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
