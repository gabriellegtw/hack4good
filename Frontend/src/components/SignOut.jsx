import React from 'react';

const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    // Redirect to the login page after signing out
    window.location.href = "/"; // Assuming the login page is at the root path
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
