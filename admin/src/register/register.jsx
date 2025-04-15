import React, { useState } from "react";
import './register.css'
import { Link, } from "react-router-dom";
import axios  from 'axios'



const Register = () => {

  const [admininfo, setAdminInfo] = useState({
    fname:'',
    lname:'',
    adminemail:'',
    adminpassword:'',
  })

 
  

  const handleRegisterForm =  async (e) => {
    e.preventDefault();

     try {
    
      const response = await  axios.post('http://localhost:5001',admininfo,{
        headers:{
          'Content-Type': 'multipart/form-data',
        },
       
      });
      if (response) {
        console.log('admin sign-up')
      }
      else{
        console.log('admin not sign-up')
      }
          
     } catch (error) {
       console.log('post data error ========>' )
     }

  }
  return (
        <>

      <div className="register-section">
        <div className='form-header'>
          <h2>Register</h2>
          <form onSubmit={handleRegisterForm}>
            <input type='text' name="fname" value={admininfo.fname} onChange={(e) => setAdminInfo({...admininfo,fname:e.target.value})} placeholder='First Name' />
            <input type='text' name="lname" value={admininfo.lname} onChange={(e) => setAdminInfo({...admininfo,lname:e.target.value})} placeholder='Last Name' />
            <input type="email" name="adminemail" value={admininfo.adminemail} onChange={(e) => setAdminInfo({...admininfo,adminemail:e.target.value})} placeholder="Email" />
            <input type="password" name="adminpassword" value={admininfo.adminpassword} onChange={(e) => setAdminInfo({...admininfo,adminpassword:e.target.value})} placeholder="Password" />
            <button type='submit' >Register</button>
            <p>Already registered <Link to='/login'>login</Link></p>
            </form>
        </div>
        </div>
      </>
      )
}
      export default Register;