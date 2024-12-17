import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobDetails() {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [resumeLink, setResumeLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`)
            .then((result) => result.json())
            .then((data) => setJob(data))
            .catch((error) => console.error('Error fetching job details:', error));
    }, [id]);

    const handleInputChange = (e) => {
        setResumeLink(e.target.value);
    };

    const handleApply = () => {
        if (resumeLink.trim() === '') {
            toast.error('Please provide your resume link.');
        } else {
            toast.success('Job applied successfully!');
            setShowModal(false); // Close modal on successful application
        }
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalOpen = () => setShowModal(true);

    if (!job) {
        return <p className="text-center">Loading job details...</p>;
    }

    // Handle undefined benefits gracefully
    const benefitsList = job.benefits && job.benefits.length > 0 
        ? job.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">{benefit}</li>
        ))
        : <p className="text-gray-600">No benefits listed.</p>;

    return (
        <div className="container mx-auto p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h3 className="text-4xl font-bold text-gray-800">{job.jobTitle}</h3>
                <p className="text-lg text-gray-600"><strong>Company:</strong> {job.companyName}</p>
                <p className="text-lg text-gray-600"><strong>Location:</strong> {job.jobLocation}</p>
                <p className="text-lg text-gray-600"><strong>Salary:</strong> ${job.minPrice} - ${job.maxPrice}</p>
                <p className="text-lg text-gray-600"><strong>Experience Level:</strong> {job.experienceLevel}</p>

                <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-2xl font-semibold text-gray-800">About Job and Company</h4>
                    <p className="text-gray-600 mt-2">{job.description}</p>
                    
                </div>

                

                {/* <div className="flex justify-between  items-center">
    <p className="text-lg font-semibold text-gray-800">Job Type: {job.employmentType}</p>
    <button
        onClick={handleModalOpen}
        className="bg-blue text-white p-2 rounded"
    >
        Apply Now
    </button>
</div> */}

<div>
        <div className='mb-2'>
            <p className='text-sm md:text-lg '>Job Type : {job.employmentType}</p>
        </div>
        <div>
            <button onClick={handleModalOpen}  className='bg-blue p-2 text-white rounded'>Apply Now</button>
        </div>
</div>

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                            <div className="flex justify-between items-center">
                                <h4 className="text-xl font-bold text-gray-800">Apply for Job</h4>
                                <button
                                    onClick={handleModalClose}
                                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    &times;
                                </button>
                            </div>
                            <p className="text-gray-600 mt-2">Enter your resume link to apply</p>
                            <input
                                type="text"
                                placeholder="Your resume link"
                                value={resumeLink}
                                onChange={handleInputChange}
                                className="w-full p-4 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleApply}
                                className="mt-4 w-full p-4 bg-blue text-white font-bold rounded-lg hover:bg-blue"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}

                <ToastContainer />
            </div>
        </div>
    );
}

export default JobDetails;
