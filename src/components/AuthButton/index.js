import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthButton = ({ onPress, text }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({

    button: {
        width: "80%",
        height: 50,
        backgroundColor: "#06D6A0",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
      },
        text: {
        color: "#333333",
        fontSize: 20,
        fontWeight: "bold",
        },


});

export default AuthButton;