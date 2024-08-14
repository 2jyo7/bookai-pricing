"use client"
import { PythonArrayType } from '@/types '
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CodeExample = () => {
  const [pyData, setPyData] = useState< PythonArrayType[]>([])
  const [jsData, setJsData] = useState<PythonArrayType[]>([])

  async function getPythonData() {
    const res = await axios.get("http://localhost:3000/python")
   return setPyData(res.data);
    
    }
    async function getJavaSData() {
      const res = await axios.get("http://localhost:3000/javascript")
     return setJsData(res.data);
      
      }
  useEffect(() => {
  getPythonData();
  getJavaSData();
      },[])

 return (
    <div 
    className="max-w-sm w-full mx-auto
    rounded-lg shadow-md overflow-hidden md:max-w-7xl flex flex-wrap justify-center mt-10">
    {/* card 1 */}
    <div className="p-4 h-full">
      <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 
      p-8 flex-col max-w-sm
       border border-gray-500">
        <div className="flex items-center mb-3">
         
          <h2 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
            Code-Examples
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
        <div className="p-4  max-w-5xl h-full">
        <div className="flex items-center mt-6">
         
         <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
           Python
         </h3>
       </div>
      <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 p-8 flex-col
       border border-gray-500 max-w-sm">
        <div className="flex flex-col justify-between flex-grow">
        
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
  <pre className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-white dark:text-gray-300 overflow-x-auto">
    <code>
      {`import requests\n\n` +
       `API_KEY = 'your_api_key_here'\n` +
       `API_ENDPOINT = 'https://tryBookAI.com/api/generate-book'\n\n` +
       `response = requests.post(API_ENDPOINT, json=data, headers=headers)\n\n` +
       `if response.status_code == 200:\n` +
       `  result = response.json()\n` +
       `  print(f"Book generation started. Job ID: {result['job_id']}")\n` +
       `else:\n` +
       `  print(f"Error: {response.status_code} - {response.text}")`}
    </code>
  </pre>
</div>


        {jsData && jsData?.map((d) => (
            <div className="flex flex-col" key={d.id}>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Content-Type
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          X-API-Key
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          api
                        </th><th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          MODEL
                        </th><th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Topic
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          WORD_COUNT
                        </th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                          <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium ">
                          {d.headers['Content-Type']}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.headers['X-API-Key']}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.api}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.model}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.language}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.topic}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.word_count}
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
        <div className="flex items-center mt-6">
         
         <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
           JavaScript(Node)
         </h3>
       </div>
        <div className="flex rounded-lg h-full dark:bg-slate-900 bg-gray-800 p-8 flex-col
       border border-gray-500">
        <div className="flex flex-col justify-between flex-grow">
        
        <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
  <pre className="text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed text-white dark:text-gray-300 overflow-x-auto">
    <code>
      {`const axios = require('axios');\n\n` +
       `const API_KEY = 'your_api_key_here';\n` +
       `const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';\n\n` +
       `axios.post(API_ENDPOINT, data, { headers })\n` +
       `  .then(response => {\n` +
       `    console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);\n` +
       `  })\n` +
       `  .catch(error => {\n` +
       `    console.error('Error:', error.response ? error.response.data : error.message);\n` +
       `  });`}
    </code>
  </pre>
</div>



        {pyData && pyData?.map((d) => (
            <div className="flex flex-col" key={d.id}>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                  <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Content-Type
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          X-API-Key
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          api
                        </th><th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          MODEL
                        </th><th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Topic
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="text-md font-medium px-6 py-4 text-left bg-blue-600"
                        >
                          WORD_COUNT
                        </th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                          <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium ">
                          {d.headers['Content-Type']}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.headers['X-API-Key']}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.api}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.model}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.language}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.topic}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                          {d.data.word_count}
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
        </div>
      </div>
    </div>
  </div>
  )
}

export default CodeExample;


//  import requests

// API_KEY = "your_api_key_here"
// API_ENDPOINT = "https://tryBookAI.com/api/generate-book"
// response= requests.post(API_ENDPOINT, json=data, headers=headers)

// if response.status_code == 200:
//     result = response.json()
//     print(f"Book generation started. Job ID: {result['job_id']}")
// else:
//     print(f"Error: {response.status_code} - {response.text}") }
//     

// const axios = require('axios');

// const API_KEY = 'your_api_key_here';
// const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

// const headers = {
//     'Content-Type': 'application/json',
//     'X-API-Key': API_KEY
// };

// const data = {
//     api: 'openai',
//     model: 'gpt-3.5-turbo',
//     topic: 'The Future of Artificial Intelligence',
//     language: 'English',
//     word_count: 5000
// };

// 