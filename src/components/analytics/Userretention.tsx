import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight } from 'lucide-react';


const userretentionData = [
    {
        week:"Week 1",
        value:100
    },
    {
        week:"Week 2",
        value:75
    },
    {
        week:"Week 3",
        value:65
    },
    {
        week:"Week 4",
        value:50
    },
    {
        week:"Week 5",
        value:47
    },
    {
        week:"Week 6",
        value:45
    },
    {
        week:"Week 7",
        value:40
    },
    {
        week:"Week 8",
        value:30
    }
];



const UserRetention = () => {
  return (
    <div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <h2>User Retention</h2>
        <div className='w-full h-96'>
            <ResponsiveContainer>
                <LineChart width={300} height={100} data={userretentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/>
                    <XAxis stroke='#ccc'/>
                    <YAxis stroke='#ccc'/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>
            <p className='flex gap-2 items-center justify-center'>
                <ArrowRight className='text-purpleColor'/> 
                <span className='text-purpleColor font-semibold'>Retention</span>
            </p>
        </div>
    </div>
  )
}

export default UserRetention;