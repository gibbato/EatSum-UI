import React, { createContext, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

// Create a new context for authentication state management.
export const AuthContext = createContext();

// AuthProvider component handles authentication state and provides it to child components.
export const AuthProvider = ({ children }) => {
  // Define state variables
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  // useEffect hook runs once during component mount to set up the authentication state listener.
  useEffect(() => {
    // Subscribe to the authentication state changes using Firebase Auth's onAuthStateChanged method.
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Unsubscribe from the authentication state changes when the component unmounts to avoid memory leaks.
  }, []);

  // onAuthStateChanged function is called whenever the authentication state changes.
  // It updates the 'user' state and sets 'isLoading' to false once the authentication state is resolved.
  function onAuthStateChanged(user) {
    setUser(user);
    if (isLoading) setIsLoading(false);
  }

  // If the authentication state is still loading, return null to avoid rendering children prematurely.
  if (isLoading) return null;

  // If authentication state is resolved, provide the 'isLoading', 'user', and 'setUser' variables to children.
  // This allows child components to access the authentication state using AuthContext.Consumer or useContext(AuthContext).
  return (
    <AuthContext.Provider value={{ isLoading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
