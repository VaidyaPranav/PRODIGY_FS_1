import "./App.css";
import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
 
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersResponse = await fetch('http://localhost:3002/users');
      const users = await usersResponse.json();

      // Check if there is a user with matching name, email, and password
      const userExists = users.some(
        user =>
          user.user_name === name &&
          user.email === email &&
          user.passwords === password
      );

      if (!userExists) {
        alert("Name, email, or password is incorrect");
        return;
      }

      alert("Login successful!");
      // You can redirect or perform other actions here

  

      // Navigate to the next page after successful registration
      navigate('/loginedold', { state: { name, email } });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="containers" id="/signin">
      <div className="logo"></div>
      <div className="registration-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
<label htmlFor="password">password</label>
           <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "10px" }}
            />
    
          <button type="submit" className="register-btn"  >
            Login
          </button>
          
        </form>
      </div>
      <footer>
        <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> |{' '}
        <a href="#">Help</a>
        <p>Prodigy InfoTech. All rights reserved.</p>
        <p>
          Don't have an account <a href="/signin">create</a>
        </p>
      </footer>
    </div>
  );
};

export default Login;