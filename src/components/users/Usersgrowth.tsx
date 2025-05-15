import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {motion} from "framer-motion";


const usergrowthData = [
  {
    month:"Jan",
    value:"1300"
  },
  {
    month:"Feb",
    value:"1500"
  },
  {
    month:"Mar",
    value:"1900"
  },
  {
    month:"Apr",
    value:"3000"
  },
  {
    month:"May",
    value:"4300"
  },
  {
    month:"Jun",
    value:"5000"
  },
];

const Usersgrowth = () => {
  return (
    <motion.div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
      <h2>User Activity</h2>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <LineChart width={300} height={100} data={usergrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/>
            <XAxis stroke="#ccc" dataKey="month"/>
            <YAxis stroke='#ccc' dataKey="value"/>
            <Tooltip/>
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default Usersgrowth;