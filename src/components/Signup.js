
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then(() => {
      alert('Signup successful');
      navigate('/login');
    });
  };

  return (
    <div id="signup-container">
      <h2 id="signup-title">Sign Up</h2>
      <form id="signup-form" onSubmit={handleSignup}>
        <div>
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Password" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" id="signup-button">Sign Up</button>
      </form>
      <div id="signup-footer">Already have an account? Login.</div>
    </div>
  );
};

export default Signup;
