import {User} from "lucide-react";
import {motion} from "framer-motion";

const Profile = () => {
  return (
    <motion.div whileHover={{translateY:-10, transition:{duration:0.3}}} className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full space-y-4'>
      <div className="flex items-center gap-4">
        <User className="text-purpleColor"/>
        <h3 className="font-semibold text-xl">
          Profile
        </h3>
      </div>
      <div className="flex items-center gap-4">
        <img src="personTwo.png" alt="profileImage" className="w-16 h-16"/>
        <div>
          <h4 className="text-xl font-semibold">John Doe</h4>
          <p className="opacity-60">john.doe@gmail.com</p>
        </div>
      </div>
      <button className="text-white font-semibold bg-purpleColor py-1.5 px-4 rounded-md cursor-pointer">
        Edit Profile
      </button>
    </motion.div>
  )
}

export default Profile;