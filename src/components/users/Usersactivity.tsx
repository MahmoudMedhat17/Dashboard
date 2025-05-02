import { ResponsiveContainer,ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const useractivityData = [
  {
    day:"Mon",
    value:"370"
  },
  {
    day:"Mon",
    value:"370"
  },
  {
    day:"Mon",
    value:"370"
  },
  {
    day:"Mon",
    value:"370"
  },
  {
    day:"Mon",
    value:"370"
  },
];


// Do it later

const Usersactivity = () => {
  return (
    <div className='p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
      <h2>User Activity Heatmap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart data={useractivityData}>
          <XAxis dataKey="day" hide/>
          <YAxis dataKey="value" hide/>
          <Scatter>
            
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Usersactivity;