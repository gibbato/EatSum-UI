import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const userForgotPassword = () => {
    // do something
  };

  const userLogin = () => {
    // do something
  };

  const userRegister = () => {
    // do something
    };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUser({ email: text })}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Enter Password"
          onChangeText={(text) => setUser({ password: text })}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={userForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={userLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={userRegister}>
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FF6B6B",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    height: 50,
    borderColor: "black",
    borderRadius: 40,
    backgroundColor: "#FFD166",
    justifyContent: "center",
    alignItems: "left",
    padding: 20,
    marginBottom: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "blue",
    fontSize: 12,
    marginBottom: 40,
  },
  loginBtn: {
    width: "80%",
    height: 50,
    backgroundColor: "#06D6A0",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});

export default Login;
