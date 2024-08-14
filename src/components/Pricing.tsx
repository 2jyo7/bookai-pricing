import React from 'react'

const Pricing = () => {
  return (
<div 
className="max-w-sm w-full mx-auto
rounded-lg shadow-md overflow-hidden md:max-w-7xl flex flex-wrap justify-center mt-10">
    {/* card 1 */}
    <div className="p-4 h-full">
      <div className="flex rounded-lg h-full dark:bg-slate-900
      max-w-sm bg-gray-800 p-8 flex-col
       border border-gray-500">
        <div className="flex items-center mb-3">
          
          <h2 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
           API Pricing
          </h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
        <p className="leading-relaxed text-xl text-white dark:text-gray-300 mt-4">
        Our API pricing is based on the model used and the number of tokens processed. Here is a breakdown of the costs:  
                         </p>

                         <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border border-gray-600 mt-4">
          <thead className="border-b">
            <tr>
               <th
                scope="col"
                className="text-md font-medimd px-6 py-4 text-left bg-blue-600"
              >
                API
              </th>
              <th
                scope="col"
                className="text-md font-medimd px-6 py-4 text-left bg-blue-600"
              >
              MODEL
              </th>
              <th
                scope="col"
                className="text-md font-medimd px-6 py-4 text-left bg-blue-600"
              >
                Price per 1K tokens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 whitespace-nowrap text-md font-medium ">
              OpenAI
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              GPT-3.5
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              $0.002
              </td>
             
            </tr>
            <tr className=" border-b">
              <td className="px-6 py-4 whitespace-nowrap text-md font-medimd">
              OpenAI
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              GPT-4
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              $0.03
              </td>
              
            </tr>
            <tr className=" border-b">
              <td className="px-6 py-4 whitespace-nowrap text-md font-medimd">
              Together AI
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              Llama-2-70b
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              $0.0008
              </td>
             
            </tr><tr className=" border-b">
              <td className="px-6 py-4 whitespace-nowrap text-md font-medimd">
              Together AI
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              Llama-2-13b
              </td>
              <td className="text-md font-light px-6 py-4 whitespace-nowrap">
              $0.0008
              </td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


               
           
           <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          Token Estimation                   </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
            On average, 1 token is approximately 
            4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                    </p>
          <div className="flex items-center mb-3">
          
          <h3 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          Billing
            </h3>
        </div>
          <p className="leading-relaxed text-xl text-white dark:text-gray-300">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly.
           Detailed usage reports are available in your account dashboard.
                   </p>
          
        </div>
      </div>
    </div>
  </div> 
   )
  
}

export default Pricing