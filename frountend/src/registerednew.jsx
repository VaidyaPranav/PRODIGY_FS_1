import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
let Registerednew = () => {

const location = useLocation();
    const { name, email , password } = location.state || {};
    return (
        <div className="registered-container">
            <div className="registered-card">
                <h1 className="welcome-title">Welcome, {name}!</h1>
                <p className="welcome-message">
                    Congratulations on successfully registering your account.<br />
                    We're excited to have you join our community!
                </p>
                <div className="user-details">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Password:</strong> <span className="password">{password}</span></p>
                </div>
                <p className="reminder">
                    Please keep your credentials safe and do not share them with anyone.<br />
                    You can now explore all the features we offer.
                </p>
            </div>
        </div>
    );
}
export default Registerednew;