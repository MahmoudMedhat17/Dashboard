import {motion} from "framer-motion";
import Statescard from "../components/Statescard";
import {Package, TrendingUp, TriangleAlert, DollarSign } from "lucide-react";
import { productsTable } from "../utils";


const Products = () => {
  return (
    <section>
      <motion.main initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.4}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        <Statescard title="Total Products" data="1234" icon={<Package className="text-[#6366f1]"/>}/>
        <Statescard title="Top Selling" data="89" icon={<TrendingUp className="text-[#10B981]"/>}/>
        <Statescard title="Low Stock" data="23" icon={<TriangleAlert className="text-[#ffd518]"/>}/>
        <Statescard title="Total Revenue" data="$543,210" icon={<DollarSign className="text-[#fa3321]"/>}/>
      </motion.main>
      <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full">
        <div className="flex justify-between items-center">
          <h2>Product List</h2>
          <input type="text" />
        </div>
        <div className="overflow-x-auto">
            <motion.table initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8}} className="min-w-full divide-y divide-gray-700">
                <thead className="">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CATEGORY</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRICE</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STOCK</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SALES</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {
                    productsTable.map((product, index)=>(
                      <tr key={index}>
                        <div className="flex items-center gap-2 px-6 py-4">
                          <img src={product.img} className="w-6 h-6"/>
                          <td className="px-0.5 py-4 whitespace-nowrap text-xs font-medium text-white">{product.name}</td>
                        </div>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.stock}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.sales}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex items-center gap-2">
                            <span>{product.actions.edit}</span>
                            <span>{product.actions.delete}</span>
                          </td>
                      </tr>  
                    ))
                  }
                </tbody>
            </motion.table>
        </div>
      </div>
    </section>
  )
}

export default Products