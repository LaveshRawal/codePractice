import { useState } from "react";
import React from "react";
import LoginForm from "../Login Form in ReactJS with React Hooks/LoginForm";
import "../Login Form in ReactJS with React Hooks/form.css"

const Main = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin@123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }

    console.log(details);
  };

  const Logout = (details) => {
    setUser({ name: "", email: "" });
    console.log("Logout");
    setError("");
  };

  return (
    <>
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
};

export default Main;
