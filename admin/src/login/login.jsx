import React, { useState } from "react";
import './login.css'
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ()=>{
   
    const [email,setAdminEmail] = useState('');
    const [password,SetAdminPassword]= useState('');

    const handleLoginForm = async (e)=>{
        e.preventDefault();
try {
  
   toast.success("Admin Login Successfully",{
    position: "top-center"
   })


} catch (error) {
    toast.success("Admin Login not Successfully",{
        position: "buttom-center"
       })
}

    }
    return(
        <>
        <div className="login-section">
            <div className="login-header">
            <h2>Register</h2>
          <form onSubmit={handleLoginForm}>
           
            <input type="email" value={email} onChange={(e) => setAdminEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => SetAdminPassword(e.target.value)} placeholder="Password" />
            <button type='submit' >Login</button>
            <p>New user <Link to={'/register'}>Register Here</Link></p>
            
            </form>
            </div>
        </div>
        </>
    )
}

export default Login;