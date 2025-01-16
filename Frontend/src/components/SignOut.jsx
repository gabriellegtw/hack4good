const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
