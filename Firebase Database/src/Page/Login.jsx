import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Service/Firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("You are logged in");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => handlesubmit(e)}>
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>
        <input
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Your Email"
        /><br /><br />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          {/* <button type="button" className="toggle-password-btn" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button> */}
        </div>
       
        <input type="submit" className="submit-btn" />
        <p className="signup-link">
          Don't have an account? <Link to={"/signup"}>Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
