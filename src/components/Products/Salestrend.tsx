import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {motion} from "framer-motion";


const salesTrendingData = [
  {
    month:"Jan",
    sales:"4300"
  },
  {
    month:"Feb",
    sales:"3000"
  },
  {
    month:"Mar",
    sales:"4700"
  },
  {
    month:"Apr",
    sales:"4500"
  },
  {
    month:"May",
    sales:"6000"
  },
  {
    month:"Jun",
    sales:"5800"
  }
];


const Salestrend = () => {
  return (
    <motion.div initial={{opacity:0, translateY:20}} animate={{opacity:1, translateY:0}} transition={{delay:0.8}} className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4">
      <h2>Sales Trend</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={salesTrendingData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/>
          <XAxis dataKey="month" stroke="#ccc"/>
          <YAxis stroke="#ccc"/>
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

export default Salestrend;