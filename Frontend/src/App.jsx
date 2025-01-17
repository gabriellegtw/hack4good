import React, { useState, useEffect } from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import Calendar from "./Calendar";
import Kaban from "./components/Kaban/Kaban";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleToggle = () => {
    setSignUp((prev) => !prev); // Toggle between Sign In and Sign Up
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <SignOut />
          <Calendar />
          <Kaban />
        </>
      ) : signUp ? (
        <SignUp onToggle={handleToggle} />
      ) : (
        <SignIn onToggle={handleToggle} />
      )}
    </div>
  );
};

export default App;
