import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const userdemographicsData = [
  {
    days:"18-24",
    percent:20
  },
  {
    days:"25-34",
    percent:30
  },
  {
    days:"35-44",
    percent:25
  },
  {
    days:"45-54",
    percent:15
  },
  {
    days:"+55",
    percent:10
  }
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface renderCustomizedLabelProps{
  cx:string;
  cy:string;
  midAngle:number;
  outerRadius:number;
  percent:number;
  days:string;
  index:number;
}


const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, days, index }: renderCustomizedLabelProps) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const color = COLORS[index % COLORS.length];

  return (
    <text style={{overflowWrap:"break-word", maxWidth:"100%"}} fontSize={12} x={x} y={y} fill={color} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {days}
      {" "}
      {`${(percent).toFixed(0)}%`}
    </text>
  );
};

const Userdemographs = () => {
  return (
    <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4">
      <h2>User Demographics</h2>
      <div className='w-full h-96'>
      <ResponsiveContainer height="80%">
        <PieChart width={400} height={400}>
            <Pie
              data={userdemographicsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="percent"
            >
              {userdemographicsData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))}
            </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex flex-wrap justify-center gap-4'>
        {
          userdemographicsData.map((user,index)=>(
            <div key={index}>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4' style={{backgroundColor:`${COLORS[index % COLORS.length]}`}}/>
                <span className='text-sm font-semibold' style={{color:`${COLORS[index % COLORS.length]}`}}>
                  {user.days}
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

export default Userdemographs;