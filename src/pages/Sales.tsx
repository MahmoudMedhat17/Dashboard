import {motion} from "framer-motion";
import Statescard from "../components/Statescard";
import {DollarSign , ShoppingCart, TrendingUp, CreditCard } from "lucide-react";
import Salesoverview from "../components/Sales/Salesoverview";
import Salesbycategory from "../components/Sales/Salesbycategory";

const Sales = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{duration:1, delay:0.4}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Revenue" icon={<DollarSign className="text-purpleColor"/>} data="$1,234,560"/>
        <Statescard title="Avg. Order Value" icon={<ShoppingCart className="text-greenColor"/>} data="&78,90"/>
        <Statescard title="Conversion Rate" icon={<TrendingUp className="text-yellowColor"/>} data="3.45%"/>
        <Statescard title="Sales Growth" icon={<CreditCard className="text-redColor"/>} data="12.3%"/>
      </motion.main>
      <div>
        <Salesoverview/>
      </div>
      <div>
        <Salesbycategory/>
      </div>
    </section>
  )
}

export default Sales;