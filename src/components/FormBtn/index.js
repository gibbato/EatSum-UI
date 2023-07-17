import React from 'react';
import { StyleSheet, TouchableOpacity, Text, useWindowDimensions } from 'react-native';



export default function FormButton({ buttonTitle, ...rest }) {

    const {height: screenHeight, width: screenWidth} = useWindowDimensions();

    return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: width / 2,
      height: height / 15,
      backgroundColor: '#6646ee',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },
    buttonText: {
      fontSize: 28,
      color: '#ffffff'
    }
  });