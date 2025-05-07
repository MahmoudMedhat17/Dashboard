import {motion} from "framer-motion";
import {Bell} from "lucide-react";

const Notifications = () => {
  return (
    <motion.div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4'>
      <div className="flex items-center gap-4">
        <Bell className="text-purpleColor"/>
        <h3 className="font-semibold text-xl">
          Notifications
        </h3>
      </div>
    </motion.div>
  )
}

export default Notifications;