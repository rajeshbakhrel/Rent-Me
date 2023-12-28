import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://parajuli11.pythonanywhere.com/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      // Login successful, handle redirection or further actions
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-main-div">
      <div className="login-form">
        <h2>LOGIN</h2>

        <form onSubmit={handleLogin}>
          <label className="name-login">
            Username:
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="name-login">
            Password:
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <NavLink to={`/SingleProduct/1`}>
            <button type="submit" className="button-login-part">
              Login
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
