import { Zap, ShoppingBag, Users, ChartNoAxesColumn } from 'lucide-react';
import {motion} from "framer-motion";
import Statescard from "../components/Statescard";
import Salesoverview from "../components/overview/Salesoverview";
import Categorydis from "../components/overview/Categorydis";
import Salesbychannel  from "../components/overview/Salesbychannel";

const Overview = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4, duration:1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title={"Total Sales"} icon={<Zap className="text-purpleColor"/>} data={"$12,345"}/>
        <Statescard title={"New Users"} icon={<Users className="text-purpleColor"/>} data={"1,234"}/>
        <Statescard title={"Total Products"} icon={<ShoppingBag className="text-pinkColor"/>} data={"567"}/>
        <Statescard title={"Conversion Rate"} icon={<ChartNoAxesColumn className="text-greenColor"/>} data={"12.5%"}/>
      </motion.main>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Salesoverview/>
        <Categorydis/>
      </motion.div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:1, duration:1}} className="grid mt-10">
        <Salesbychannel/>
      </motion.div>
    </section>
  )
}

export default Overview;