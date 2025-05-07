import { BarChart, Bar, CartesianGrid, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';


const productperformanceData = [
  {
    product:"Product A",
    sales:4000,
    revenue:2300,
    profit:2300
  },
  {
    product:"Product B",
    sales:3000,
    revenue:1300,
    profit:2300
  },
  {
    product:"Product C",
    sales:2300,
    revenue:10000,
    profit:2400
  },
  {
    product:"Product D",
    sales:2600,
    revenue:4000,
    profit:2400
  },
  {
    product:"Product E",
    sales:2300,
    revenue:5000,
    profit:2300
  }
];


const Productperformance = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
      <h2>Product Performance</h2>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={productperformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d2d2d"/>
            <XAxis dataKey="product" stroke='#ccc'/>
            <YAxis stroke='#ccc'/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="sales" fill='#6366f1'/>
            <Bar dataKey="revenue" fill='#10B981'/>
            <Bar dataKey="profit" fill='#ffd518'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Productperformance;