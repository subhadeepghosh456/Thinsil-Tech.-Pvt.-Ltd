import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // cheking email and password valid or not
    // if not valid show a pop up
    if (userInfo.email !== email || userInfo.password !== password) {
      alert("User validation failed");
      return;
    }
    // otherwise go to products page
    navigate("/products");
  };

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      // fetching the user information from localstorage
      const value = JSON.parse(localStorage.getItem("credential"));
      setUserInfo(value);
    } else {
    }
  }, []);
  return (
    <div className="form-container">
      <h3 className="login-signup-form"> Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="anc@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Abc@456789"
          />
        </div>
        <div>
          <p className="login-form-p">
            <span className="login-form-span"> </span>
          </p>
        </div>
        <button className="form-button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
