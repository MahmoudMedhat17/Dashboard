import {motion} from "framer-motion";
import { ShoppingBag, Clock, CircleCheckBig, DollarSign  } from 'lucide-react';
import Statescard from "../components/Statescard";
import Dailyorders from "../components/orders/Dailyorders";
import Orderstatus from "../components/orders/Orderstatus";
import Orderlist from "../components/orders/Orderlist";

const Orders = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4, duration:1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Orders" icon={<ShoppingBag className="text-purpleColor"/>} data="1234"/>
        <Statescard title="Pending Orders" icon={<Clock className="text-yellowColor"/>} data="56"/>
        <Statescard title="Completed Orders" icon={<CircleCheckBig className="text-greenColor"/>} data="1,178"/>
        <Statescard title="Total Revenue" icon={<DollarSign className="text-redColor"/>} data="$98,775"/>
      </motion.main>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
        <Dailyorders/>
        <Orderstatus/>
      </motion.div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:1, duration:1}}>
        <Orderlist/>
      </motion.div>
    </section>
  )
}

export default Orders;