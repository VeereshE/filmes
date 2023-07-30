import React, { useState } from 'react';
import {useHistory} from "react-router-dom"
import "./index.css"
const Login = () => {

  const history = useHistory();
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUserData = JSON.parse(localStorage.getItem('userData'));

    if (savedUserData && formData.name === savedUserData.name && formData.password === savedUserData.password) {
          history.push('/home');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className='SignIn-Conatiner'>
      <div className='form-container'>
     
      <h1 className='heading'>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
         <br/>
        <button type="submit" >Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
