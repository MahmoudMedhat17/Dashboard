import {Lock} from "lucide-react";
import {motion} from "framer-motion";
import Clickbutton from "../../utils/Clickbutton";

const Security = () => {
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className="p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4">
        <div className="flex items-center gap-4">
            <Lock className="text-purpleColor"/>
            <h3 className="font-semibold text-xl">Security</h3>
        </div>
        <div className="flex items-center justify-between">
            <h3 className="opacity-70">
                Two-Factor Authentication
            </h3>
            <Clickbutton/>
        </div>
        <button className="text-white font-semibold bg-purpleColor py-1.5 px-4 rounded-md cursor-pointer">
            Change Password
        </button>
    </motion.div>
  )
}

export default Security;