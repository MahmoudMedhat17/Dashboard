import {motion} from "framer-motion";
import {usersTable} from "../../utils/index";


const Userstable = () => {
  return (
    <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.6}} className="overflow-x-auto relative p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-fit w-full">
        <div className="flex justify-between items-center">
          <h2>Product List</h2>
          <input type="text" />
        </div>
        <div>
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROLE</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {
                    usersTable.map((users, index)=>(
                      <tr key={index}>
                        <td className="flex items-center gap-2 px-6 py-4">
                          <img src={users.img} className="w-6 h-6"/>
                          <td className="px-0.5 py-4 whitespace-nowrap text-xs font-medium text-white">{users.name}</td>
                        </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{users.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{users.role}</td>
                          {
                            users.status === "Active" ? 
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              <span className="bg-green-600 px-2 py-1 rounded-full">{users.status}</span>
                              </td>
                            :
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              <span className="bg-red-500 px-2 py-1 rounded-full">{users.status}</span>
                            </td>
                          }
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex items-center gap-2">
                            <span>{users.actions.edit}</span>
                            <span>{users.actions.delete}</span>
                          </td>
                      </tr>  
                    ))
                  }
                </tbody>
            </table>
        </div>
      </motion.div>
  )
}

export default Userstable;