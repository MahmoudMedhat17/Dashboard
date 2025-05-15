import { BarChart, Bar, ResponsiveContainer, XAxis,YAxis, LabelList, Cell } from 'recharts';


const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];


const Salesbychannel = () => {
  return (
    <div className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4">
      <h2>Sales by Channel</h2>
      <div className='w-full h-96'>
        <ResponsiveContainer>
          <BarChart width={150} height={40} data={SALES_CHANNEL_DATA}>
            <XAxis dataKey="name" stroke='#ffffff' style={{fontSize:"10px"}}/>
            <YAxis dataKey="value" stroke='#ffffff'/>
            <Bar dataKey="value">
            {
              SALES_CHANNEL_DATA.map((_,index)=>(
                <Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]}/>
              ))
            }
            <LabelList dataKey="value" position="top" fill='#ffffff'/>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Salesbychannel;