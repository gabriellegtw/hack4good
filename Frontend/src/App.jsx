import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Kaban from "./components/Kaban/Kaban";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    // Check for JWT token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Calendar />
          <SignOut />
          <Kaban />
        </>
      ) : signUp ? (
        <SignUp />
      ) : (
        <SignIn />
      )}
      <br />
      <a className="menu_links" onClick={() => setSignUp(!signUp)}>
        {signUp ? "Click Here to Sign In" : "Click Here to Sign up"}
      </a>
    </div>
  );
};

export default App;
