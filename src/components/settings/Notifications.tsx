import {motion} from "framer-motion";
import {Bell} from "lucide-react";
import Clickbutton from "../../utils/Clickbutton";

const Notifications = () => {


  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4'>
      <div className="flex items-center gap-4">
        <Bell className="text-purpleColor"/>
        <h3 className="font-semibold text-xl">
          Notifications
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <p className="opacity-70">Push Notifications</p>
        <Clickbutton/>
      </div>
      <div className="flex items-center justify-between">
        <p className="opacity-70">Email Notifications</p>
        <Clickbutton/>
      </div>
      <div className="flex items-center justify-between">
        <p className="opacity-70">SMS Notifications</p>
        <Clickbutton/>
      </div>
    </motion.div>
  )
}

export default Notifications;