import {motion} from "framer-motion";
import React from "react";


interface analyticscardProps{
    title:string;
    data:string;
    icon:React.ReactNode;
    period:string;
    smallIcon:React.ReactNode;
    percent:string;
};


const Analyticscard = ({title, data, icon, period, smallIcon, percent}:analyticscardProps) => {
  return (
    <motion.div whileHover={{translateY:-10, boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.1)"}} transition={{duration:0.3}} className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer backdrop-blur-md">
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-start space-y-1">
                    <span className="text-gray-200">{title}</span>
                    <span className="text-xl font-semibold">{data}</span>
                </div>
                <span>{icon}</span>
            </div>
            <div className="flex items-center gap-2">
                <span>{smallIcon}</span>
                <span>{percent}</span>
                <span>{period}</span>    
            </div>
        </div>
    </motion.div>
  )
}

export default Analyticscard;