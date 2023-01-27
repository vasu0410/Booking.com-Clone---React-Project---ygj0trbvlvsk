import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emails");
  const getPassword = localStorage.getItem("passwords");
  const handleSubmit = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      console.log(email.current.value);
      localStorage.setItem("emails", email.current.value);
      localStorage.setItem("passwords", password.current.value);
      alert(`Successfully register ${email.current.value}`);
    }
  }
  const handleClick = () => {
    if (email.current.value == getEmail && password.current.value == getPassword) {
      navigate("/Master");
      alert("Loging successfully");
    }
    else if (email.current.value == "" && password.current.value == "") {
      alert("Please enter email and password");
    }
    else if (!email.current.value) {
      alert("Please enter email");
    }
    else if (!password.current.value) {
      alert("Please enter password");
    }
    else if (password.current.value.length < 6) {
      alert("Please enter 6 digit password");
    }
    else {
      alert("Incorrect email or password");
    }
  }
  return (
      <div className="Login">
        <form className="containerlog" onSubmit={handleSubmit}>
          <h3>Sign-In</h3>
            <input type="text" ref={email}  id="name" required placeholder="Enter Your Email"/>
            <input type="password" ref={password} id="pass" minLength="6"  required placeholder="Password"/> 
          <button id="rgs_btn">Register</button>
          <button id="lgn_btn" type="button" onClick={handleClick}>Login</button>
        </form>
      </div>
  );
};

export default Login;
