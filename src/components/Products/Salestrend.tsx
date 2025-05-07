import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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
    <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4">
      <h2>Sales Trend</h2>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <LineChart data={salesTrendingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/>
            <XAxis dataKey="month" stroke="#ccc"/>
            <YAxis stroke="#ccc"/>
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Salestrend;