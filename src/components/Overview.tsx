import React from 'react'
import Link from 'next/link'

const Overview = () => {
  
  return (
    <div className="max-w-sm w-full mx-auto
    rounded-lg shadow-md overflow-hidden md:max-w-4xl flex flex-wrap justify-center mt-10">
    {/* card 1 */}
    <div className="p-4 h-full">
      <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 p-8 flex-col
       border border-gray-500">
        
        <div className="flex items-center mb-3">
          {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center
           rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
           
          </div> */}
          <h2 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
            Overview
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          The Book Generator API allows you to generate books on various 
          topics using different language models. This documentation provides 
          details on how to use the API, including authentication, available endpoints,
           and code examples.

          </p>
          <Link
            href="#"
            className="mt-3 text-violet-400 dark:text-white hover:text-blue-600 inline-flex items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Overview;
