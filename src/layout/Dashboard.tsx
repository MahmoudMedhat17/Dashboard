import { Routes, Route } from "react-router-dom";
import Overview from "../pages/Overview";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Sales from "../pages/Sales";
import Orders from "../pages/Orders";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Error from "../pages/Error";

const Dashboard = () => {
  return (
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
  )
}

export default Dashboard;