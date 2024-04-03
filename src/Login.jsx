import React, { useState } from 'react';
import './Login.css'; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Sign-In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <a href="/">Forgot your password?</a>
        <hr />
        <p>New to Amazon?</p>
        <a href="/">Create your Amazon account</a>
      </div>
    </div>
  );
};

export default Login;
