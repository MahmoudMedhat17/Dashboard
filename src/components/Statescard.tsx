import {motion} from "framer-motion";

interface statesCardProps{
  title:string;
  icon:React.ReactNode;
  data:string;
};


const Statescard = ({title,icon,data}:statesCardProps) => {
  return (
    <motion.div whileHover={{y:-10, boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.1)"}} transition={{duration:0.3}} className="p-6 border border-gray-700 rounded-xl shadow-xl cursor-pointer backdrop-blur-md">
      <div className="flex flex-col items-start space-y-1">
        <div className="flex gap-2">
          <span>{icon}</span>
          <span className="text-gray-200 text-sm">{title}</span>
        </div>
        <span className="text-xl font-semibold">{data}</span>
      </div>
    </motion.div>
  )
}

export default Statescard;