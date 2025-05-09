import {motion} from "framer-motion";
import {Trash} from "lucide-react";


const Dangerzone = () => {
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className="bg-redColor/40 p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4">
        <div className="flex items-center gap-4">
            <Trash className="text-redColor"/>
            <h3 className="text-xl font-semibold">
                Danger Zone
            </h3>
        </div>
        <p>Permentley delete your account and all of your content</p>
        <button className="text-white font-semibold bg-redColor py-1.5 px-4 rounded-md cursor-pointer">
            Delete Account
        </button>
    </motion.div>
  )
}

export default Dangerzone;