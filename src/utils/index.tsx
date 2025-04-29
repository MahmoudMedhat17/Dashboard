import { ChartNoAxesColumn, ShoppingBag , Users, DollarSign , ShoppingCart , TrendingUp , Settings, Pencil, Trash2  } from 'lucide-react';



interface sidebarItemsProps{
    name:string;
    icon:React.ReactNode;
    color:string;
    path:string;
};


export const sidebarItems: sidebarItemsProps[]= [
    {
        name:"Overview",
        icon:<ChartNoAxesColumn/>,
        color:"#6366f1",
        path:"/"
    },
    {
        name:"Products",
        icon:<ShoppingBag/>,
        color:"#8B5CF6",
        path:"/products"
    },
    {
        name:"Users",
        icon:<Users/>,
        color:"#EC4899",
        path:"/users"
    },
    {
        name:"Sales",
        icon:<DollarSign/>,
        color:"#10B981",
        path:"/sales"
    },
    {
        name:"Orders",
        icon:<ShoppingCart/>,
        color:"#F59E0B",
        path:"/orders"
    },
    {
        name:"Analytics",
        icon:<TrendingUp/>,
        color:"#3B82F6",
        path:"/analytics"
    },
    {
        name:"Settings",
        icon:<Settings/>,
        color:"#6EE7B7",
        path:"/settings"
    }
];



interface navbarHeadersProps {
    title:string;
    path:string;
};


export const navbarHeaders: navbarHeadersProps[] = [
    {
        title:"Overview",
        path:"/"
    },
    {
        title:"Products",
        path:"/products"
    },
    {
        title:"Users",
        path:"/users"
    },
    {
        title:"Sales",
        path:"/sales"
    },
    {
        title:"Orders",
        path:"/orders"
    },
    {
        title:"Analytics",
        path:"/analytics"
    },
    {
        title:"Settings",
        path:"/settings"
    }
];




export const productsTable = [
    {
        img:"/personTwo.png",
        name:"Wireless Earbuds",
        category:"Electronics",
        price:"$59.99",
        stock:"143",
        sales:"1200",
        actions:{
            edit:<Pencil className='text-green-600' size={16}/>,
            delete:<Trash2 className='text-red-500' size={16}/>
        }
    },
    {
        img:"/personTwo.png",
        name:"Leather Wallet",
        category:"Accessories",
        price:"$39.99",
        stock:"89",
        sales:"800",
        actions:{
            edit:<Pencil className='text-green-600' size={16}/>,
            delete:<Trash2 className='text-red-500' size={16}/>
        }
    },
    {
        img:"/personTwo.png",
        name:"Smart Watch",
        category:"Electronics",
        price:"$199.99",
        stock:"56",
        sales:"650",
        actions:{
            edit:<Pencil className='text-green-600' size={16}/>,
            delete:<Trash2 className='text-red-500' size={16}/>
        }
    },
    {
        img:"/personTwo.png",
        name:"Yoga Mat",
        category:"Fitness",
        price:"$29.99",
        stock:"210",
        sales:"950",
        actions:{
            edit:<Pencil className='text-green-600' size={16}/>,
            delete:<Trash2 className='text-red-500' size={16}/>
        }
    },
    {
        img:"/personTwo.png",
        name:"Coffee Maker",
        category:"Home",
        price:"$79.99",
        stock:"78",
        sales:"720",
        actions:{
            edit:<Pencil className='text-green-600' size={16}/>,
            delete:<Trash2 className='text-red-500' size={16}/>
        }
    }
];


export const usersTable = [
    {
        img:"/personTwo.png",
        name:"John Doe",
        email:"john@example.com",
        role:"Customer",
        status:"Active",
        actions:{
            edit:<span className='text-[#6366f1]'>Edit</span>,
            delete:<span className='text-red-500'>Delete</span>
        }
    },
    {
        img:"/personTwo.png",
        name:"Jane Smith",
        email:"jane@example.com",
        role:"Admin",
        status:"Active",
        actions:{
            edit:<span className='text-[#6366f1]'>Edit</span>,
            delete:<span className='text-red-500'>Delete</span>
        }
    },
    {
        img:"/personTwo.png",
        name:"Bob Johnson",
        email:"bob@example.com",
        role:"Customer",
        status:"Inactive",
        actions:{
            edit:<span className='text-[#6366f1]'>Edit</span>,
            delete:<span className='text-red-500'>Delete</span>
        }
    },
    {
        img:"/personTwo.png",
        name:"Alice Brown",
        email:"alice@ecample.com",
        role:"Customer",
        status:"Active",
        actions:{
            edit:<span className='text-[#6366f1]'>Edit</span>,
            delete:<span className='text-red-500'>Delete</span>
        }
    },
    {
        img:"/personTwo.png",
        name:"Charlie Wilson",
        email:"charlie@example.com",
        role:"Moderator",
        status:"Active",
        actions:{
            edit:<span className='text-[#6366f1]'>Edit</span>,
            delete:<span className='text-red-500'>Delete</span>
        }
    },
];