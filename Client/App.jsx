
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider} from '../context/userContext';
import Dashboard from './pages/Dashboard';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


function App() {

  return (
    <UserContextProvider>
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  </UserContextProvider>
);
}

export default App
