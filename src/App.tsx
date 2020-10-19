import React from "react";
import { AuthProvider } from "context/AuthContext/AuthContext";
import RouterComponent from "routes/Router";
import WithTheme from "components/hoc/WithTheme";

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
