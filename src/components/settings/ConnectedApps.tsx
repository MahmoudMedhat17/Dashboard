import {motion} from "framer-motion";
import { CircleHelp } from 'lucide-react';
import { useState } from "react";
import { connectedAppsData } from "../../utils";

const ConnectedApps = () => {

    const [connected,setConnected] = useState(()=>(
        connectedAppsData.map((app)=>(
            app.status === "Connected"
        ))
    ));

    const toggleBtn = (index:number) =>{
        setConnected((prev)=>{
            const updatedConnect = [...prev];
            updatedConnect[index] = !updatedConnect[index];
            return updatedConnect;
        });
    };
    
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className="p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4">
        <div className="flex items-center gap-4">
            <CircleHelp className="text-purpleColor"/>
            <h3 className="font-semibold text-xl">Connected Apps</h3>
        </div>
        <div>
            {
                connectedAppsData.map((app,index)=>(
                    <div className="flex items-center justify-between" key={index}>
                        <div className="flex items-center gap-4 space-y-4">
                            <img src={app.icon} alt={app.company} className="w-10 h-10"/>
                            <h3 className="opacity-70">
                                {app.company}
                            </h3>
                        </div>
                        <button onClick={()=>toggleBtn(index)} className={`py-1.5 px-4 rounded-md cursor-pointer text-white ${connected ? "bg-greenColor" : "bg-gray-400"} `}>
                            {connected ? "Connected" : "Connect"}
                        </button>
                    </div>
                ))
            }
        </div>
        <button className="text-purpleColor font-semibold py-1.5 px-4 rounded-md cursor-pointer">
            + Add Account
        </button>
    </motion.div>
  )
}

export default ConnectedApps;