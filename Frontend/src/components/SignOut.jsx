const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Welcome Back!</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
