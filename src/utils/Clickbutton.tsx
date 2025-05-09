import { useState } from "react";

const Clickbutton = () => {

    const [open,setOpen] = useState(false);


    const onToggle = () =>{
        setOpen((prev)=> !prev);
    }

  return (
    <button onClick={onToggle} className={`relative cursor-pointer w-10 h-5 rounded-full ${open ? "bg-purpleColor" : "bg-gray-400"} duration-300`}>
        <div className={`absolute w-4 h-4 -top-[6px] left-0.5 translate-y-[50%] bg-white rounded-full transition-all ${open ? `left-[calc(100%-1.25rem)]` : `left-0.5`}`}></div>
    </button>
  )
}

export default Clickbutton;