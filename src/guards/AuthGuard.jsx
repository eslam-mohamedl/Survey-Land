// src/guards/authGuards.jsx
import { Navigate, Outlet } from "react-router-dom";


export default function AuthGuard() {
  const isAuthenticated = !!localStorage.getItem("token"); 
  // 👆 هنا ممكن تستخدم Context أو Redux أو أي طريقة عندك لحفظ حالة تسجيل الدخول

  
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}
