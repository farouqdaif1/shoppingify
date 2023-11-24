import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/auth/AutheContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { env } from "./util/validateEnv.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={env.VITE_PUBLIC_GOOGLE_API_TOKEN}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
