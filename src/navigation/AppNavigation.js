// This component is responsible for rendering the correct stack navigator
// depending on the authentication state of the user.
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Import stack navigators for authenticated and unauthenticated routes.
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

// Import the AuthContext to access the authentication state.
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

function AppNavigation() {
  // Retrieve the authentication state from the AuthContext using the useContext hook.
  const { isLoading, user } = useContext(AuthContext);

  // Render the main navigation container provided by react-navigation.
  // If the user is authenticated (user is not null), navigate to the AppStack (authenticated routes).
  // If the user is not authenticated (user is null), navigate to the AuthStack (unauthenticated routes).
  // If the isLoading state is true, display the SplashScreen component while the authentication state is being determined.

  return (
    <NavigationContainer>
      {isLoading ? <SplashScreen /> : user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
