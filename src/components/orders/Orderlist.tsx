import {ordersListTable} from "../../utils/index";


const Orderlist = () => {
  return (
    <div className="overflow-x-auto relative p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full">
        <div className="flex justify-between items-center">
            <h2>Orders List</h2>
            <input type="text" />
        </div>
        <div>
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {
                    ordersListTable.map((order, index)=>(
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.orderId}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.total}</td>
                        {
                            order.status === "Delivered" ? 
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                    <span className="bg-deliveredColor px-2 py-1 rounded-full">{order.status}</span>
                                </td>
                            :
                            order.status === "Processing" ? 
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                    <span className="bg-processingColor px-2 py-1 rounded-full">{order.status}</span>
                                </td>
                            :
                            order.status === "Shipped" ? 
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                    <span className="bg-shippedColor px-2 py-1 rounded-full">{order.status}</span>
                                </td>
                            :
                            order.status === "Pending" ?
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                                    <span className="bg-pendingColor px-2 py-1 rounded-full">{order.status}</span>
                                </td>
                            :
                            ""
                        }
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><span>{order.actions}</span></td>
                      </tr>  
                    ))
                  }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Orderlist;