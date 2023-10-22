import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // register user by name ,email,password
    e.preventDefault();
    //if name or email or password missing don't go ahead
    if (!fname || !email || !password) {
      alert("Please Fill the form properly");
      return;
    }
    // after that store the user data in the localstorage
    localStorage.setItem(
      "credential",
      JSON.stringify({ name: fname, email: email, password: password })
    );
    // after all of these navigate to login page
    navigate("/login");
  };
  return (
    <div className="form-container">
      <h3 className="login-signup-form"> Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Full name">Full name</label>
          <input
            className="form-input"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="Full name"
          />
        </div>
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
