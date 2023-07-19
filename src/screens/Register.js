import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { register } from "../services/firebaseAuth";

import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import AuthButton from "../components/AuthButton";

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const createUser = () => {
    register(email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          //secureTextEntry
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <AuthButton onPress={createUser} text="Register" />

      <TouchableOpacity onPress={navigateToLogin}>
        <Text>Back to Login</Text>
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
});

export default Register;
