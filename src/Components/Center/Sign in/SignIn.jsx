import React, { useState } from "react";
import "./SignIN.css";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const setEmptyValue = (event) => {
    const { name } = event.target;
    if (name === "username" || name === "password") {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleInputChange}
          onFocus={setEmptyValue}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          onFocus={setEmptyValue}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
