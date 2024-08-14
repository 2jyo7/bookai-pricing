// import Authentication from "@/components/Authentication ";
// import CodeExample from "@/components/CodeExample ";
// import Endpoints from "@/components/Endpoints ";
// import Overview from "@/components/Overview ";
// import Pricing from "@/components/Pricing ";
// import Tutorial from "@/components/Tutorial ";

// export default function Home() {
//   return (
//     <main className=" items-center justify-between">
//       <Overview />
//       <Authentication />
//       <Endpoints />
//       <Tutorial />
//       <CodeExample />
//       <Pricing  />
//       </main>
//   );
// }

"use client"
import { useState, useEffect } from 'react';
import Authentication from "@/components/Authentication ";
import CodeExample from "@/components/CodeExample ";
import Endpoints from "@/components/Endpoints ";
import Overview from "@/components/Overview ";
import Pricing from "@/components/Pricing ";
import Tutorial from "@/components/Tutorial ";
import { FaToggleOff } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa6';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <main className={`items-center justify-between ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-300 text-gray-900'}`}>
      <button 
        onClick={toggleTheme} 
        className="p-2 m-4 border rounded "
      >
        
         {isDarkMode ?  <FaToggleOn /> : <FaToggleOff  />} 
      </button>
      <Overview />
      <Authentication />
      <Endpoints />
      <Tutorial />
      <CodeExample />
      <Pricing />
    </main>
  );
}

