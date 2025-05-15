import {UsersRound, UserRoundPlus, UserRoundCheck, UserX  } from 'lucide-react';
import Statescard from "../components/Statescard"
import Userstable from '../components/users/Userstable';
import Usersgrowth from '../components/users/Usersgrowth';
import Userdemographics from '../components/users/Userdemographics';
import {motion} from "framer-motion";

const Users = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4, duration:1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Users" icon={<UsersRound className='text-purpleColor'/>} data="152,300"/>
        <Statescard title="New Users Today" icon={<UserRoundPlus className='text-greenColor'/>} data="243"/>
        <Statescard title="Active Users" icon={<UserRoundCheck className='text-yellowColor'/>} data="98,520"/>
        <Statescard title="Churn Rate" icon={<UserX className='text-lightRedColor'/>} data="2.4%"/>
      </motion.main>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid mb-10"> 
        <Userstable/>
      </motion.div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:1, duration:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-4"> 
        <Usersgrowth/>
        <Userdemographics/>
      </motion.div>
    </section>
  )
}

export default Users