import {motion} from "framer-motion";
import { CreditCard } from 'lucide-react';

const Billing = () => {
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className="p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4">
        <div className="flex items-center gap-4">
            <CreditCard className="text-purpleColor"/>
            <h3 className="font-semibold text-xl">Billing</h3>
        </div>
        <div className="flex items-center justify-between">
            <h3 className="opacity-70">
                Current Plan
            </h3>
            <p className="opacity-70 font-semibold">
                Pro
            </p>
        </div>
        <button className="text-white font-semibold bg-purpleColor py-1.5 px-4 rounded-md cursor-pointer">
            Upgrade Plan
        </button>
    </motion.div>
  )
}

export default Billing;