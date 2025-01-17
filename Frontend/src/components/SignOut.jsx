const SignOut = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      {console.log(localStorage.getItem("token"))}
      {console.log("ToEKN")}
      <h1>{}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
