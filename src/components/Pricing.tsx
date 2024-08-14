import React from 'react'

const Pricing = () => {
  return (
<div 
className="max-w-sm w-full mx-auto
rounded-lg shadow-md overflow-hidden md:max-w-5xl justify-center mt-10">
    {/* card 1 */}
    <div className="p-4 h-full">
      <div className="flex rounded-lg h-full dark:bg-slate-900
       bg-gray-800 p-8 flex-col 
       border border-gray-500">

<div className="flex items-center mb-3">
          <h2 className="text-violet-400 text-3xl mt-10 dark:text-white font-medium">
          API Pricing
        </h2>
      </div>
      <p className="leading-relaxed text-xl text-white dark:text-gray-300">
        Our API pricing is based on the model used and the number of tokens processed. Here is a breakdown of the costs:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-600 mt-4 ">
          <thead className="bg-blue-600 text-white text-md">
            <tr>
              <th className="px-4 py-3 text-left">API</th>
              <th className="px-4 py-3 text-left">MODEL</th>
              <th className="px-4 py-3 text-left">Price per 1K tokens</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-white">
            <tr className="border-b">
              <td className="px-4 py-3">OpenAI</td>
              <td className="px-4 py-3">GPT-3.5</td>
              <td className="px-4 py-3">$0.002</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">OpenAI</td>
              <td className="px-4 py-3">GPT-4</td>
              <td className="px-4 py-3">$0.03</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Together AI</td>
              <td className="px-4 py-3">Llama-2-70b</td>
              <td className="px-4 py-3">$0.0008</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Together AI</td>
              <td className="px-4 py-3">Llama-2-13b</td>
              <td className="px-4 py-3">$0.0008</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center mb-4">
        <h3 className="text-violet-400 text-3xl dark:text-white font-medium mt-6">
          Token Estimation
        </h3>
      </div>
      <p className="leading-relaxed text-xl text-white dark:text-gray-300">
        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
      </p>
      <div className="flex items-center mb-4">
        <h3 className="text-violet-400 text-3xl dark:text-white font-medium mt-6">
          Billing
        </h3>
      </div>
      <p className="leading-relaxed text-xl text-white dark:text-gray-300">
        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
      </p>

    </div>

    
  </div>
</div>


   )
  
}

export default Pricing