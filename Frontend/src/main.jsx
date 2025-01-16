import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App.jsx";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCfEx3QHxbf1x1ZFxMZVhbRHNPMyBoS35Rc0ViWHleeXFRRmlcU0Jy');

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
