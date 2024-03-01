import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Homepage from './components/Homepage';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './layouts/AuthLayout';
import JobPostLayout from './components/JobPost/JobPostLayout';
function App() {
    const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/' element={isLoggedIn ? <Homepage /> : <Navigate to="/auth/login" />} />
                <Route path='/homepage' element={<Homepage />} />
                <Route path="jobpost" element={<JobPostLayout />} />
                <Route path='/auth' element={<AuthLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
