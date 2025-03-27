import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import Dashboard from "./components/Dashboard"


function App() {


  return (
<Routes>
      <Route path="/" element={<AddUser />} />
      <Route path="/home" element={<Dashboard/>}/>
</Routes>

  )
}

export default App
