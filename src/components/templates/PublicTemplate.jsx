import React from 'react'
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';
import { Outlet } from "react-router-dom";

function Public() {
  return (
       <div>
      <Navbar />
      <main className="pt-20">
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}

export default Public