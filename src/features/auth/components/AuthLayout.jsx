import React from "react";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <h1>Welcome</h1>
      <div>{children}</div>
    </div>
  );
}

export default AuthLayout;
