import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const channelperformanceData = [
  {
    name:"Organic Search",
    value:25
  },
  {
    name:"Email",
    value:15
  },
  {
    name:"Referral",
    value:12
  },
  {
    name:"Social Media",
    value:17
  },
  {
    name:"Direct",
    value:12
  },
  {
    name:"Paid Search",
    value:19
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C470', '#00C930'];


interface renderCustomizedLabelProps{
  cx:string;
  cy:string;
  midAngle:number;
  outerRadius:number;
  percent:number;
  name:string;
  index:number;
}


const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, name, index } : renderCustomizedLabelProps) => {
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


const Channelperformance = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <h2>Channel Performance</h2>
        <div className='w-full h-96'>
          <ResponsiveContainer height="80%">
            <PieChart width={400} height={400}>
                <Pie
                  data={channelperformanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {channelperformanceData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                  ))}
                </Pie>
            </PieChart>
          </ResponsiveContainer>
            <div className='flex flex-wrap justify-center gap-4'>
              {
                channelperformanceData.map((category,index)=>(
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
    </div>
  )
}

export default Channelperformance;