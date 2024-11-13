
import React, { useState } from 'react';
import './login.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handleLogin();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div id="login-container">
      <h2 id="login-title">Login</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label htmlFor="email" className="login-label">Email:</label>
          <input 
            type="email" 
            id="login-email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="login-input" 
          />
        </div>
        <div className="login-input-group">
          <label htmlFor="password" className="login-label">Password:</label>
          <input 
            type="password" 
            id="login-password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="login-input" 
          />
        </div>
        <button type="submit" id="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
