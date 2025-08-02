import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import external CSS

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        if (!email || !password) {
            alert("Please enter both email and password.");
        } else {
            try {
                const result = await fetch("https://685b813489952852c2d9c4ae.mockapi.io/info/hello");
                const response = await result.json();
                const data = response.find(item => item.myEmail === email && item.myPassword === password);

                if (data) {
                    alert("Login successful");
                    navigate("/Home");
                } else {
                    alert("Login failed");
                }
            } catch (error) {
                alert("An error occurred. Please try again.");
                console.error(error);
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;
