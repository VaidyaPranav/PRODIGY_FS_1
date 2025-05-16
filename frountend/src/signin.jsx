import "./App.css";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const usersResponse = await fetch('http://localhost:3002/users');
      const users = await usersResponse.json();

      const emailExists = users.some(user => user.email === email);

      if (emailExists) {
        alert("Email already exists");
        return;
      }

      const response = await fetch('http://localhost:3002/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.text();
      alert(result);

      // Pass name and email to registernew page via state
      navigate('/registernew', { state: { name, email ,password } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="containers" id="/signin">
      <div className="logo"></div>
      <div className="registration-form">
        <h2>Create an account</h2>
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
   
          <label htmlFor="password">Password</label>
          <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "10px", flex: 1 }}
            />
          <button type="submit" className="register-btn">
            register
          </button>
        </form>
      </div>
      <footer>
        <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> |{" "}
        <a href="#">Help</a>
        <p>Prodigy InfoTech. All rights reserved.</p>
        <p>already have an account <a href="/">login</a></p>
      </footer>
    </div>
  );
};

export default RegistrationPage;
