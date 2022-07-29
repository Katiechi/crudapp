import {Route,Routes} from "react-router-dom"
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import User from "./pages/user/User";

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbar/>


    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users/:id" element={<User />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
    
    </h1>
  );
}

export default App;
