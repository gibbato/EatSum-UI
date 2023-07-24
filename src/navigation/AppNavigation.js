import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Import stack navigators for authenticated and unauthenticated routes.
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

// Import the AuthContext to access the authentication state.
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../screens/SplashScreen";

function AppNavigation() {
  const { isLoading, user } = useContext(AuthContext);



  return (
    <NavigationContainer>
        
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNavigation;
