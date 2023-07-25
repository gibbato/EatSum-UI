import React, { useEffect } from "react";

import AppNavigation from "./src/navigation/AppNavigation";
import { initializeFirebase } from "./src/services/firebaseConfig";

import { AuthProvider } from "./src/context/AuthContext";
import { LocationProvider } from "./src/context/LocationContext";

function App() {
  useEffect(() => {
    initializeFirebase();
  });

  return (
    <AuthProvider>
      <LocationProvider>
        <AppNavigation />
      </LocationProvider>
    </AuthProvider>
  );
}

export default App;
