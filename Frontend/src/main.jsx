import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";

// Access the environment variable
const clerkPubKey = "pk_test_Z2l2aW5nLWdob3VsLTIxLmNsZXJrLmFjY291bnRzLmRldiQ";

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
