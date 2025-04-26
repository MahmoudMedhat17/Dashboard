import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const categoryDistributionData = [
  {
    name:"Electronics",
    value:31
  },
  {
    name:"CLothing",
    value:22
  },
  {
    name:"Sports & Outdoors",
    value:13
  },
  {
    name:"Books",
    value:14
  },
  {
    name:"Home & Garden",
    value:19
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const color = COLORS[index % COLORS.length];

  return (
    <text style={{overflowWrap:"break-word", maxWidth:"100%"}} fontSize={12} x={x} y={y} fill={color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {name}
      {" "}
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Categorydis = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[400px] w-full space-y-4'>
      <h2>Category Distribution</h2>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart width={400} height={400}>
            <Pie
              data={categoryDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {categoryDistributionData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex flex-wrap justify-center gap-4'>
        {
          categoryDistributionData.map((category,index)=>(
            <div key={index}>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4' style={{backgroundColor:`${COLORS[index % COLORS.length]}`}}/>
                <span className='text-sm font-semibold' style={{color:`${COLORS[index % COLORS.length]}`}}>
                  {category.name}
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categorydis;