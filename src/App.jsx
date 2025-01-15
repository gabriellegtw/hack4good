import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";
import Calendar from "./Calendar";

function App() {
  return (
    <header>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Calendar />
      </SignedIn>
    </header>
  );
}

export default App
