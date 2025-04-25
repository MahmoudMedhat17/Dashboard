import { Link, useLocation } from "react-router-dom";
import { navbarHeaders } from "../utils";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="w-full bg-gray-800 opacity-80 px-8 sm:px-16 md:px-32 lg:px-48 py-4 border-b border-gray-700">
        {
          navbarHeaders.map((header,index)=>(
            <Link key={index} to={header.path}>
              <h3 className="text-2xl font-semibold">{header.path === location.pathname && header.title}</h3>
            </Link>
          ))
        }
    </header>
  )
}

export default Navbar;