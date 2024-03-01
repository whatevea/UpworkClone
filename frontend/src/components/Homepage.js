import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MyJobs from './JobPost/MyJobs'


const Homepage = () => {
    return (
        <div>

            <Navbar />
            Homepage
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage