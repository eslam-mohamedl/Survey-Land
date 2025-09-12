import React from 'react'
import Navbar from "../organisms/Navbar";
import { Outlet } from "react-router-dom";
function AuthTemplate() {
  return (
      <div>
      <Navbar />
      <main className="md-px-16 sm:px-10 px-4 pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthTemplate