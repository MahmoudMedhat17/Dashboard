import { BarChart, Bar, ResponsiveContainer,XAxis, YAxis } from 'recharts';


const dailysalesData = [
  {
    day:"Mon",
    value:1000
  },
  {
    day:"Tue",
    value:1200
  },
  {
    day:"Wed",
    value:800
  },
  {
    day:"Thu",
    value:1100
  },
  {
    day:"Fri",
    value:1300
  },
  {
    day:"Sat",
    value:1600
  },
  {
    day:"Sun",
    value:1400
  }
];


const Dailysales = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
      <h2>Daily Sales Trend</h2>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <BarChart width={150} height={40} data={dailysalesData}>
          <Bar dataKey="value" fill='#00C49F'/>
          <XAxis dataKey="day" stroke='#ccc'/>
          <YAxis dataKey="value" stroke='#ccc'/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dailysales;