import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Target } from 'lucide-react';
import { useState } from 'react';


const revenueandtargetData = [
    {
        month:"Jan",
        revenue:4000,
        target:3800
    },
    {
        month:"Feb",
        revenue:3200,
        target:3400
    },
    {
        month:"Mar",
        revenue:4900,
        target:4500
    },
    {
        month:"Apr",
        revenue:4700,
        target:4300
    },
    {
        month:"May",
        revenue:6000,
        target:5200
    },
    {
        month:"Jun",
        revenue:5200,
        target:5800
    },
    {
        month:"Jul",
        revenue:7000,
        target:6400
    }
];


const RevenueAndTarget = () => {

    const [date,setDate] = useState("This Month");

  return (
    <div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <div className='flex justify-between items-center'>
            <h2>Revenue Vs Target</h2>
            <select value={date} onChange={(e)=>setDate(e.target.value)} className='px-2 py-1 bg-gray-500/60 rounded-lg'>
                <option>This Month</option>
                <option>This Week</option>
                <option>This Year</option>
            </select>
        </div>
        <div className='w-full h-96'>
            <ResponsiveContainer>
                <AreaChart width={500} height={400} data={revenueandtargetData}>
                    <XAxis dataKey="month" stroke='#ccc'/>
                    <YAxis stroke='#ccc'/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="revenue" stroke='#6366f1' />
                    <Area type="monotone" dataKey="target" stroke='#10B981'/>
                </AreaChart>
            </ResponsiveContainer>
            <div className='flex justify-center items-center gap-4'>
                <span className='flex items-center gap-2 text-purpleColor'>
                    <Target size={15} className='text-purpleColor'/>
                    Revenue
                </span>
                <span className='flex items-center gap-2 text-greenColor'>
                    <Target size={15} className='text-greenColor'/>
                    Target
                </span>
            </div>
        </div>
    </div>
  )
}

export default RevenueAndTarget;