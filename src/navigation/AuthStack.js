import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  //if (State.isLoading) {
  //  return <SplashScreen />;
  //}

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ONBOARDING SCREEN EVENTUALLY */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
