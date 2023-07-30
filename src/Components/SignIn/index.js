import React, { useState } from 'react';
import {useHistory} from "react-router-dom"

import "./index.css"

const SignIn = () => {

    const history = useHistory();

    const handleClick = () => {
      history.push('/login');
    };
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('User registered successfully!');
  };

  return (
    
    <div className='SignIn-Conatiner'>
      <div className='form-container'>
      <h1 className='heading'>User Sign-In</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}  />

        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  />

        <label>Profession:</label>
        <select name="profession" value={formData.profession} onChange={handleChange} >
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select>
        <br/>
        <button type="submit" className='button'>Submit</button>
        
      </form>
    
      <span>If you allredy have account..</span> <button type="submit" className='button1' onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default SignIn;
