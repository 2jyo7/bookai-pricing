"use client";
import { ResponseTypeArray } from '@/types ';
import axios from 'axios';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Endpoints = () => {
  const [data, setData] = useState<ResponseTypeArray[]>([]);
  const [showResponse, setShowResponse] = useState(false); // State to control visibility

  useEffect(() => {
    async function getJSONdata() {
      const res = await axios.get("http://localhost:3000/response")
      setData(res.data);
    }

    getJSONdata();
  }, []);

  console.log(data);

  return (
    <div 
    className="max-w-sm w-full mx-auto
    rounded-lg shadow-md overflow-hidden md:max-w-7xl flex flex-wrap justify-center mt-10">
      {/* card 1 */}
      <div className="p-4 h-full">
        <div className="flex rounded-lg h-full dark:bg-slate-900
         bg-gray-800 p-8 flex-col max-w-sm
          border border-gray-500">
          <div className="flex items-center mb-3">
            <h2 className="text-violet-400 text-3xl dark:text-white font-medium">
              EndPoints
            </h2>
          </div>

          <div className="flex items-center mb-3 mt-10">
            <h3 className="text-violet-400 text-2xl dark:text-white font-medium">Generate Book</h3>
          </div>

          <div className="flex items-center mb-3 space-x-4">
            <div className="border border-gray-700 rounded-md bg-teal-500 
            w-24 text-xl text-black font-semibold max-w-sm
              flex justify-center items-center p-2">
              POST
            </div>
            <div className="border border-gray-700 rounded-md bg-blue-500 w-auto text-xl text-black font-semibold
              flex justify-center items-center p-2">
              /api/generate-book
            </div>
          </div>

          <div className="flex flex-col justify-between flex-grow mt-10 max-w-sm">
            <h3 className="text-violet-400 text-2xl dark:text-white font-medium">Request Body</h3>
            <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
            <table className=" min-w-full max-w-sm">
              <thead>
                <tr className="bg-blue-500 text-white text-lg">
                  <th className="py-3 px-6 text-left font-medium">PARAMETER</th>
                  <th className="py-3 px-6 text-left font-medium">TYPE</th>
                  <th className="py-3 px-6 text-left font-medium">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800 border-b border-gray-500">
                  <td className="py-3 px-6 text-left text-blue-500 font-semibold text-xl">api</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">string</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">The API provider to use. Options: openai or together</td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-500">
                  <td className="py-3 px-6 text-left text-blue-500 font-semibold text-xl">model</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">string</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">The specific model to use (e.g., gpt-3.5-turbo, gpt-4, llama-2-70b)</td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-500">
                  <td className="py-3 px-6 text-left text-blue-500 font-semibold text-xl">type</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">string</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">The main topic or theme of the book</td>
                </tr> 
                <tr className="bg-gray-800 border-b border-gray-500">
                  <td className="py-3 px-6 text-left text-blue-500 font-semibold text-xl">language</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">string</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">The language in which the book should be generated</td>
                </tr> 
                <tr className="bg-gray-800 border-b border-gray-500">
                  <td className="py-3 px-6 text-left text-blue-500 font-semibold text-xl">word_count</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">integer</td>
                  <td className="py-3 px-6 text-left font-medium text-xl">The approximate number of words for the generated book</td>
                </tr> 
              </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>

            <h3 className="text-violet-400 text-2xl dark:text-white font-medium mt-16">Response</h3>
            <button
              onClick={() => setShowResponse(!showResponse)} // Toggle visibility
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              {showResponse ? 'Hide' : 'Show'} Response
            </button>
            {showResponse && (
              <div className="p-4 max-w-5xl h-full">
                <div className="flex rounded-lg h-full
                 dark:bg-slate-900 bg-gray-700 p-8 flex-col max-w-sm
                  border border-gray-500">
                  <div className="flex flex-col justify-between flex-grow">
                    {data && data.map((d) => (
                      <div className="flex flex-col" key={d.id}>
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                              <table className="min-w-full max-w-sm">
                                <thead className="border-b">
                                  <tr>
                                    <th
                                      scope="col"
                                      className="text-md font-medium px-6 py-4 text-left bg-blue-400"
                                    >
                                      ID
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-md font-medium px-6 py-4 text-left bg-blue-400"
                                    >
                                      Message
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-md font-medium px-6 py-4 text-left bg-blue-400"
                                    >
                                      Status
                                    </th>
                                    <th
                                      scope="col"
                                      className="text-md font-medium px-6 py-4 text-left bg-blue-400"
                                    >
                                      JOB_ID
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                                      {d.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium ">
                                      {d.message}
                                    </td>
                                    <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                                      {d.status}
                                    </td>
                                    <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                                      {d.job_id}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Endpoints;
