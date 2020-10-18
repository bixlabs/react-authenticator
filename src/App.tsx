import React from "react";
import { AuthProvider } from "./hoc/AuthContext/AuthContext";
import RouterComponent from "./routes/Router";
import WithTheme from "./hoc/WithTheme";

function App() {
  return (
    <WithTheme>
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </WithTheme>
  );
}

export default App;
