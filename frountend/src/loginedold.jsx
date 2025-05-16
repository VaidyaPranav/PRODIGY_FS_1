import { useLocation } from "react-router-dom";
import "./App.css";
let Loginedold = () => {
    const location = useLocation();
    const { name, email } = location.state || {};

    return (
        <> <div className="registered-container">
            <div className="registered-card">
                <h1 className="welcome-title">Welcome Back, {name}!</h1>
                <p className="welcome-message">
                    We're glad to see you again in our community!<br/>
                you can now explore all the offers we offer.
                 </p>
                <div className="user-details">
                    <p><strong>Email:</strong> {email}</p>
                </div>
                <p className="reminder">
                    Thank you for loging in again!
                </p>
            </div>
        </div>
        </>
    );
};

export default Loginedold;