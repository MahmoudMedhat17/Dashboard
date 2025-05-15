import Dashboard from "./layout/Dashboard";

const App = () => {
  return (
    <>
      <div className="text-white">
        <div className="fixed flex h-screen w-full -z-1">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"/>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"/>
        </div>
          <Dashboard/>
      </div>
    </>
  )
}

export default App;