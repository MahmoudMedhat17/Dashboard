import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const salesoverviewData = [
  {
    month:"Jan",
    value:4000
  },
  {
    month:"Feb",
    value:3700
  },
  {
    month:"Mar",
    value:5000
  },
  {
    month:"Apr",
    value:4700
  },
  {
    month:"May",
    value:6000
  },
  {
    month:"Jun",
    value:5800
  },
  {
    month:"Jul",
    value:7000
  }
];


const Salesoverview = () => {
  
  const[date,setDate] = useState("This Month");

  return (
    <div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
      <div className='flex justify-between items-center'>
        <h2>Sales Overview</h2>
        <select value={date} onChange={(e)=>setDate(e.target.value)} className='px-2 py-1 bg-gray-500/60 rounded-lg'>
          <option>This Month</option>
          <option>This Week</option>
          <option>This Year</option>
        </select>
      </div>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={salesoverviewData}
          >
            <XAxis dataKey="month" stroke='#ccc'/>
            <YAxis stroke='#ccc'/>
            <Tooltip/>
            <Area type="monotone" dataKey="value" stroke='#8884d8' fill='#8884d8'/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Salesoverview;