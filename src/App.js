import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { Dashboard } from './components/Dashboard';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar title="Tricon Solutions"/>   
    <h1 className="text-center my-2">Welcome to Tricon IT Solutions</h1> 
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
