import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ArrowRight } from 'lucide-react';


const dailyordersData = [
    {
        day:"3/5",
        value:41
    },
    {
        day:"4/5",
        value:55
    },
    {
        day:"5/5",
        value:50
    },
    {
        day:"6/5",
        value:60
    },
    {
        day:"7/5",
        value:53
    },
    {
        day:"8/5",
        value:58
    },
    {
        day:"9/5",
        value:60
    }
];


const Dailyorders = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <h2>Daily Orders</h2>
        <div className='w-full h-96'>
            <ResponsiveContainer>
                <LineChart width={300} height={100} data={dailyordersData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/> 
                    <XAxis dataKey="day" stroke='#ccc'/>
                    <YAxis stroke='#ccc'/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="value" stroke='#8884d8' strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
            <p className='flex gap-2 items-center justify-center'>
                <ArrowRight className='text-purpleColor'/> 
                <span className='text-purpleColor font-semibold'>Orders</span>
            </p>
        </div>
    </div>
  )
}

export default Dailyorders;