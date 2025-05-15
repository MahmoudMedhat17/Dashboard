import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const customersegmentationData = [
    {
        title:"Engagement",
        segmentA:98,
        segmentB:130,
        fullMark:150
    },
    {
        title:"loyalty",
        segmentA:100,
        segmentB:120,
        fullMark:150
    },
    {
        title:"Satisfaction",
        segmentA:150,
        segmentB:120,
        fullMark:150
    },
    {
        title:"Speed",
        segmentA:100,
        segmentB:130,
        fullMark:150
    },
    {
        title:"Frequency",
        segmentA:70,
        segmentB:80,
        fullMark:150
    },
    {
        title:"Recency",
        segmentA:50,
        segmentB:70,
        fullMark:150
    }
];



const Customersegmentation = () => {
  return (
    <div className='p-4 border border-gray-700 rounded-xl shadow-xl cursor-pointer h-[500px] w-full space-y-4'>
        <h2>Customer segmentation</h2>
        <div className='w-full h-96'>
        <ResponsiveContainer className="mx-auto">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={customersegmentationData}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="title"/>
                <PolarRadiusAxis angle={30} domain={[0,150]}/>
                <Radar dataKey="segmentA" stroke='#6366f1' fill='#6366f1'/>
                <Radar dataKey="segmentB" stroke='#10B981' fill='#10B981'/>
            </RadarChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Customersegmentation;