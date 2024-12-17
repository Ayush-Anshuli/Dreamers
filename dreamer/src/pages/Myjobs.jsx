import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

function Myjobs() {
  const [jobs, setJobs] = useState([]);
  const [email, setEmail] = useState(""); // State to store user input email
  const [loading, setLoading] = useState(false);

  const fetchJobs = (inputEmail) => {
    setLoading(true);
    fetch(`http://localhost:3000/myJobs?email=${inputEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Jobs:", data); // Debug log
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  };

  const handleFetch = () => {
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }
    fetchJobs(email);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-20">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Write Your Emails</h1>
      </div>

      {/* Email Input */}
      <div className="text-center mb-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email..."
          className="py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-6/12 mb-4"
        />
        <button
          onClick={handleFetch}
          className="bg-blue text-white font-semibold px-6 py-3 rounded-lg "
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        {loading ? (
          <p className="text-center text-gray-500 py-6">Loading...</p>
        ) : jobs.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                <th className="px-6 py-4 font-medium">No.</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Salary</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4 text-gray-800">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-800">{job.jobTitle}</td>
                  <td className="px-6 py-4 text-gray-800">{job.companyName}</td>
                  <td className="px-6 py-4 text-gray-800">
                    ${job.minPrice} - ${job.maxPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 py-6">No data found for the entered email.</p>
        )}
      </div>
    </div>
  );
}

export default Myjobs;
