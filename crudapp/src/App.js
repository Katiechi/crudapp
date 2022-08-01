import {Route,Routes} from "react-router-dom"
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import User from "./pages/user/User";
import AddUser from "./pages/user/AddUser";
import Edit from "./pages/user/Edit";

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar/>


    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users/:id" element={<User />}/>
      <Route path="/add-user" element={<AddUser />}/>
      <Route path="/edit-user" element={<Edit />}/>
    </Routes>
    
    </h1>
  );
}

export default App;
