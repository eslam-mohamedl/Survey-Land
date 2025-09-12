import React, { useState } from "react";
import { login } from "../api/authApi";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log("Logged in:", res);
    } catch (err) {
      console.error("Error logging in", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" 
        value={formData.email} 
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" 
        value={formData.password} 
        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
