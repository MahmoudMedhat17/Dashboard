import {motion} from "framer-motion";
import {DollarSign, Users, ShoppingBag, Eye, ArrowUpRight, ArrowDownRight } from "lucide-react";
import Analyticscard from "../components/Analyticscard";
import RevenueAndTarget from "../components/analytics/RevenueAndTarget";
import Channelperformance from "../components/analytics/Channelperformance";
import Productperformance from "../components/analytics/Productperformance";
import Userretention from "../components/analytics/Userretention";
import Customersegmentation from "../components/analytics/Customersegmentation";

const Analytics = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4, duration:1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Analyticscard percent="12.5%" smallIcon={<ArrowUpRight className="text-greenColor" size={20}/>} period="vs Last Period" title="Revenue" icon={<DollarSign className="text-greenColor bg-greenColor/40 p-1 rounded-full"/>} data="$1,234,500"/>
        <Analyticscard percent="8.3%" smallIcon={<ArrowUpRight className="text-greenColor" size={20}/>} period="vs Last Period" title="Users" icon={<Users className="text-greenColor bg-greenColor/40 p-1 rounded-full"/>} data="45,679"/>
        <Analyticscard percent="3.2%" smallIcon={<ArrowDownRight className="text-redColor" size={20}/>} period="vs Last Period" title="Orders" icon={<ShoppingBag className="text-redColor bg-redColor/40 p-1 rounded-full"/>} data="9,876"/>
        <Analyticscard percent="15.7%" smallIcon={<ArrowUpRight className="text-greenColor" size={20}/>} period="vs Last Period" title="Page Views" icon={<Eye className="text-greenColor bg-greenColor/40 p-1 rounded-full"/>} data="1,234,517"/>
      </motion.main>
      <div className="grid mb-10">
        <RevenueAndTarget/>
      </div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Channelperformance/>
        <Productperformance/>
        <Userretention/>
        <Customersegmentation/>
      </motion.div>
    </section>
  )
}

export default Analytics;