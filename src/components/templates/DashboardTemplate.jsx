import React from 'react'
import Navbar from "../organisms/Navbar";
import Sidebar from '../organisms/Sidebar';
import { Outlet } from "react-router-dom";

function DashboardTemplate() {
  return (
    <div>
      <Navbar />
      <main className="md-px-16 sm:px-10 px-4 pt-20">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardTemplate