import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const linechartData = [
  { month: 'Jul', sales: 4000 },
  { month: 'Aug', sales: 4500 },
  { month: 'Sep', sales: 6000 },
  { month: 'Oct', sales: 5500 },
  { month: 'Nov', sales: 6700 },
  { month: 'Dec', sales: 8000 },
  { month: 'Jan', sales: 7200 },
  { month: 'Feb', sales: 6800 },
  { month: 'Mar', sales: 7500 },
  { month: 'Apr', sales: 6900 },
  { month: 'May', sales: 7700 },
  { month: 'Jun', sales: 8100 },
];

const Salesoverview = () => {
  return (
    <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-full w-full">
      <h2>Sales Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={linechartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Salesoverview;