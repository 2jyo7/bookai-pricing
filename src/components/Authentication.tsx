"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Authentication = () => {
  const [apiApi, setApiApi] = useState("");

  function generateRandomApiKey(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let apiKey = '';
    for (let i = 0; i < length; i++) {
      apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return apiKey;
  }

const handleApiClick = () => {
 const randomApi = generateRandomApiKey();
 console.log(randomApi);
 setApiApi(`Your API Key: ${randomApi}`);
  
}

  return (
   
      <div className="max-w-sm w-full mx-auto
    rounded-lg shadow-md overflow-hidden md:max-w-7xl flex flex-wrap justify-center mt-10">
      {/* card 1 */}
      <div className="p-4 h-full">
        <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 p-8 flex-col
         border border-gray-500">
          <div className="flex items-center mb-3">
            {/* <div className="w-8 h-8 mr-3 inline-flex items-center justify-center
             rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
             
            </div> */}
            <h2 className="text-violet-400 text-3xl dark:text-white font-medium">
              Authentication
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-xl text-white dark:text-gray-300">
            To use the API, you need to include your API key in the header of each request:
            </p>
            
             <div className="shadow appearance-none bg-gray-700 border rounded w-full 
             py-0.5 px-6 m-2 text-white leading-tight focus:outline-none focus:shadow-outline
             border-gray-500 ">
              <div className="border border-gray-500 h-16 text-normal max-w-56 flex justify-center items-center p-1">
                 X-API-Key: YOUR_API_KEY
                </div>
               </div>
               <p className="leading-relaxed text-xl text-white dark:text-gray-300 m-2">
               To generate an API key, use the button below:
            </p>
            <button className='bg-teal-500 hover:bg-blue-400  text-gray-950 font-semibold text-xl
              max-w-48 m-2  border border-gray-800 rounded-md h-12 transform transition duration-300 
              ease-in-out hover:-translate-y-1' onClick={handleApiClick} > 
              Generate Api key
            </button>
            <div className="shadow appearance-none bg-gray-700 border rounded w-full 
             py-0.5 px-6 m-2  text-white leading-tight focus:outline-none focus:shadow-outline
             border-gray-500 ">
              <div className=" h-16 text-2xl flex justify-center items-center p-1">
              {apiApi}
                </div></div>
            <Link
              href="#"
              className="mt-3 text-blue-400 dark:text-white hover:text-blue-600 inline-flex items-center"
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

export default Authentication;