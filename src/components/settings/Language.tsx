import {motion} from "framer-motion";
import {Earth} from "lucide-react";
import { useState } from "react";


const Language = () => {
      const[language,setLanguage] = useState("English");
      const[currency,setCurrency] = useState("USD");
    
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className="p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4">
        <div className="flex items-center gap-4">
            <Earth className="text-purpleColor"/>
            <h3>Language & Region</h3>
        </div>
        <div className="flex items-center justify-between">
            <h3>Language</h3>
            <select value={language} onChange={(e)=>setLanguage(e.target.value)} className='px-2 py-1 bg-gray-500/60 rounded-lg'>
                <option>English</option>
                <option>Arabic</option>
            </select>
        </div>
        <div className="flex items-center justify-between">
            <h3>Currency</h3>
            <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='px-2 py-1 bg-gray-500/60 rounded-lg'>
                <option>USD</option>
                <option>EUR</option>
                <option>SAR</option>
                <option>EGP</option>
            </select>
        </div>
    </motion.div>
  )
}

export default Language;