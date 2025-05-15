import {motion} from "framer-motion";
import {DollarSign , ShoppingCart, TrendingUp, CreditCard } from "lucide-react";
import Statescard from "../components/Statescard";
import Salesoverview from "../components/sales/Salesoverview";
import Salesbycategory from "../components/sales/Salesbycategory";
import Dailysales from "../components/sales/Dailysales";


const Sales = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:0.4}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Revenue" icon={<DollarSign className="text-purpleColor"/>} data="$1,234,560"/>
        <Statescard title="Avg. Order Value" icon={<ShoppingCart className="text-greenColor"/>} data="&78,90"/>
        <Statescard title="Conversion Rate" icon={<TrendingUp className="text-yellowColor"/>} data="3.45%"/>
        <Statescard title="Sales Growth" icon={<CreditCard className="text-redColor"/>} data="12.3%"/>
      </motion.main>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid mb-10">
        <Salesoverview/>
      </motion.div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:1, duration:1}} className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Salesbycategory/>
        <Dailysales/>
      </motion.div>
    </section>
  )
}

export default Sales;