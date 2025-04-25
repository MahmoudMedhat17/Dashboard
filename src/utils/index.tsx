import { ChartNoAxesColumn, ShoppingBag , Users, DollarSign , ShoppingCart , TrendingUp , Settings  } from 'lucide-react';



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