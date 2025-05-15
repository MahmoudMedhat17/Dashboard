import { productsTable } from "../../utils/index";


const Productslist = () => {
  return (
    <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full overflow-x-auto relative">
        <div className="flex justify-between items-center">
          <h2>Product List</h2>
          <input type="text" />
        </div>
        <div>
            <table className="min-w-full divide-y divide-gray-700">
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
                        <td className="flex items-center gap-2 px-6 py-4">
                          <img src={product.img} className="w-6 h-6"/>
                          <td className="px-0.5 py-4 whitespace-nowrap text-xs font-medium text-white">{product.name}</td>
                        </td>
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
            </table>
        </div>
      </div>
  )
}

export default Productslist;