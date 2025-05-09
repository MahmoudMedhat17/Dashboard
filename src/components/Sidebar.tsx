import { useState } from "react";
import {sidebarItems} from "../utils/index";
import {AnimatePresence, motion} from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <motion.div animate={{width: sidebarOpen ? 256 : 80}} className={`h-screen overflow-hidden relative z-10 transition-all duration-100 ease-linear shrink-0 ${sidebarOpen ? `w-64` : `w-20`}`}>
      <motion.div className="bg-gray-800 opacity-80 border-r backdrop-blur-md border-gray-700 p-4 h-full">
        <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={()=> setSidebarOpen(!sidebarOpen)} className="bg-gray-400 p-2 rounded-full cursor-pointer">
          <Menu size={24}/>
        </motion.button>
            <nav className="flex flex-col justify-around h-full">
              {
                sidebarItems.map((item,index)=>(
                  <div key={index}>
                    <Link to={item.path}>
                      <div className="flex gap-4 text-sm p-2 font-semibold">
                      <span style={{color:`${item.color}`}}>{item.icon}</span>
                        <AnimatePresence>
                          {
                            sidebarOpen && 
                            <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2, delay:0.1 }} 
                            >{item.name}
                            </motion.span>
                          }
                        </AnimatePresence>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </nav>
      </motion.div>
    </motion.div>
  )
}

export default Sidebar;