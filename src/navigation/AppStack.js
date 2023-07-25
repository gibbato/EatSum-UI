// This component defines the navigation stack for authenticated routes in the application.

import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import relevant screens for the navigation stack.
import HomeScreen from "../screens/HomeScreen";


// Create a native stack navigator instance.
const Stack = createNativeStackNavigator();

// Define the AppStack component, which represents the authenticated routes in the app.
const AppStack = () => {
  return (
      // Return the stack navigator with the specified screens and screen options.
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
