import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Sales from "../pages/Sales";
import Orders from "../pages/Orders";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Error from "../pages/Error";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex flex-col flex-1">
      <Navbar/>
      <div className="px-8 sm:px-16 md:px-32 lg:px-48 py-4">
        <Routes>
          <Route path="/" element={<Overview/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/sales" element={<Sales/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;