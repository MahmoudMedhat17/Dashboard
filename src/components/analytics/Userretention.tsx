import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Userretention = () => {
  return (
    <div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <h2>User Retention</h2>
        <ResponsiveContainer width="100%" height="80%">
            <LineChart width={300} height={100} >
                <CartesianGrid/>
                <XAxis/>
                <YAxis/>
                <Tooltip/>
                <Line/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Userretention;