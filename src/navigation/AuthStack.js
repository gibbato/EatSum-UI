// This component defines the navigation stack for unauthenticated routes in the application.
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import relevant screens for the navigation stack.
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Login";
import Register from "../screens/Register";

// Create a native stack navigator instance.
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  //if (State.isLoading) {
  //  return <SplashScreen />;
  //}

  // Define the AuthStack component, which represents the unauthenticated routes in the app.
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ONBOARDING SCREEN EVENTUALLY */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
