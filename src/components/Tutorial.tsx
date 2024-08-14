import React from 'react'

const Tutorial = () => {
  return (
<div 
className="max-w-sm w-full mx-auto
rounded-lg shadow-md overflow-hidden md:max-w-5xl  justify-center mt-10">
    {/* card 1 */}
    <div className="p-4 h-full">
      <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 p-8 flex-col
       border border-gray-500">
        <div className="flex items-center mb-3">
          
          <h2 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
            Tutorial
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
        <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
            Step 1: Obtain an API Key
          </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          Generate an API key using the button in the Authentication section above.</p>
          <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          Step 2: Make a Request          </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. 
          Include your API key in the header and 
          the required parameters in the request body.</p>         
           <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          Step 3: Handle the Response          </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          The API will return a response with a job ID. You can use this ID to check the status of your book generation job.          </p>
          <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          Step 4: Retrieve the Generated Book          </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).          </p>
          
        </div>
      </div>
    </div>
  </div>  )
}

export default Tutorial