import {motion} from "framer-motion";
import Statescard from "../components/Statescard";
import {Package, TrendingUp, TriangleAlert, DollarSign } from "lucide-react";
import Productslist from "../components/Products/Productslist";
import Salestrend from "../components/Products/Salestrend";
import Categorydis from "../components/Products/Categorydis";

// Fix the table overflow and responsiveness

const Products = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Products" data="1234" icon={<Package className="text-[#6366f1]"/>}/>
        <Statescard title="Top Selling" data="89" icon={<TrendingUp className="text-[#10B981]"/>}/>
        <Statescard title="Low Stock" data="23" icon={<TriangleAlert className="text-[#ffd518]"/>}/>
        <Statescard title="Total Revenue" data="$543,210" icon={<DollarSign className="text-[#fa3321]"/>}/>
      </motion.main>
      <motion.div>
        <Productslist/>
      </motion.div>
      <motion.div>
        <Salestrend/>
        <Categorydis/>
      </motion.div>
    </section>
  )
}

export default Products