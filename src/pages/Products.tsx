import {motion} from "framer-motion";
import {Package, TrendingUp, TriangleAlert, DollarSign } from "lucide-react";
import Statescard from "../components/Statescard";
import Productslist from "../components/products/Productslist";
import Salestrend from "../components/products/Salestrend";
import Categorydist from "../components/products/Categorydist";

const Products = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4, duration:1}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Products" data="1234" icon={<Package className="text-purpleColor"/>}/>
        <Statescard title="Top Selling" data="89" icon={<TrendingUp className="text-greenColor"/>}/>
        <Statescard title="Low Stock" data="23" icon={<TriangleAlert className="text-yellowColor"/>}/>
        <Statescard title="Total Revenue" data="$543,210" icon={<DollarSign className="text-redColor"/>}/>
      </motion.main>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8, duration:1}} className="grid mb-10">
        <Productslist/>
      </motion.div>
      <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:1, duration:1}} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Salestrend/>
        <Categorydist/>
      </motion.div>
    </section>
  )
}

export default Products