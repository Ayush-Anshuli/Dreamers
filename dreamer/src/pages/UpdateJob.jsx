// import React, { useState } from 'react';
// import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { useForm } from 'react-hook-form';
// import CreatableSelect from 'react-select/creatable';
// import 'react-toastify/dist/ReactToastify.css';

// function UpdateJob() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [selectedOptions, setSelectedOption] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       data.skills = selectedOptions;

//       const response = await fetch(`http://localhost:3000/update-job/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         toast.success('Job Updated successfully!');
//         navigate('/my-job'); // Redirect to the MyJobs page
//       } else {
//         toast.error('Failed to update job. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error while updating job:', error);
//       toast.error('An error occurred. Please try again.');
//     }
//     reset();
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-4 mt-5">
//       <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* Your form fields here */}
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Job Title</label>
//               <input
//                 type="text"
//                 defaultValue={'Web Developer'}
//                 {...register('jobTitle')}
//                 className="create-job-input"
//               />
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Company Name</label>
//               <input
//                 type="text"
//                 placeholder="Ex: MicroSoft"
//                 {...register('companyName')}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Minimum Salary</label>
//               <input
//                 type="text"
//                 placeholder="Ex: $30"
//                 {...register('minPrice')}
//                 className="create-job-input"
//               />
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Maximum Salary</label>
//               <input
//                 type="text"
//                 placeholder="Ex: $80"
//                 {...register('maxPrice')}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Salary Type</label>
//               <select {...register('salaryType')} className="create-job-input">
//                 <option value="">Choose your Salary</option>
//                 <option value="Hourly">Hourly</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Yearly">Yearly</option>
//               </select>
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Job Location</label>
//               <input
//                 type="text"
//                 placeholder="Ex: Bengaluru"
//                 {...register('jobLocation')}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Posting Date</label>
//               <input
//                 type="date"
//                 placeholder="Posting Date"
//                 {...register('postingDate')}
//                 className="create-job-input"
//               />
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Experience Level</label>
//               <select
//                 {...register('experienceLevel')}
//                 className="create-job-input"
//               >
//                 <option value="">Choose your Level</option>
//                 <option value="Internship">Internship</option>
//                 <option value="Entry">Entry Level</option>
//                 <option value="Medium">Mid Level</option>
//                 <option value="Workremotely">Work remotely</option>
//                 <option value="Senior">Senior Level</option>
//                 <option value="noexperience">No experience</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
//             <label className="block mb-2 text-lg">Required Skills Sets:</label>
//             <CreatableSelect
//               className="create-job-input p-4 m-2"
//               defaultValue={selectedOptions}
//               onChange={setSelectedOption}
//               options={[
//                 { value: 'JavaScript', label: 'JavaScript' },
//                 { value: 'React js', label: 'React js' },
//                 { value: 'C++', label: 'C++' },
//                 { value: 'SQL', label: 'SQL' },
//                 { value: 'CSS', label: 'CSS' },
//                 { value: 'Java', label: 'Java' },
//               ]}
//               isMulti
//             />
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-5">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Company Logo</label>
//               <input
//                 type="url"
//                 placeholder="Company Logo URL:https://something.com"
//                 {...register('companyLogo')}
//                 className="create-job-input"
//               />
//             </div>

//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Employment Type</label>
//               <select
//                 {...register('employmentType')}
//                 className="create-job-input"
//               >
//                 <option value="">Choose your Employment Type</option>
//                 <option value="Full-time">Full Time</option>
//                 <option value="Part-time">Part-time</option>
//                 <option value="Temporary">Temporary</option>
//               </select>
//             </div>
//           </div>

//           <div className="w-full mt-5">
//             <label className="block mb-2 text-lg">Job Description</label>
//             <textarea
//               {...register('description')}
//               className="w-full pl-3 py-1.5 focus:outline-none border"
//               rows={6}
//               defaultValue={'Write your description here and Hire a great Talent'}
//               placeholder="Job Description"
//             ></textarea>
//           </div>

//           <div className="w-full">
//             <label className="block mb-2 text-lg">Job Posted By</label>
//             <input
//               type="email"
//               placeholder="abc@gmail.com"
//               {...register('postedBy')}
//               className="create-job-input"
//             />
//           </div>

//           <input
//             type="submit"
//             className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
//           />
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default UpdateJob;
