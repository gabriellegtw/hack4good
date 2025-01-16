import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import { useState, useEffect } from "react";
import Calendar from "./Calendar";

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
        </>
      ) : signUp ? (
        <SignUp />
      ) : (
        <SignIn />
      )}
      <p onClick={() => setSignUp(!signUp)}>
        {signUp ? "Click Here to Sign Up" : "Click Here to Sign in"}
      </p>
    </div>
  );
};

export default App;
