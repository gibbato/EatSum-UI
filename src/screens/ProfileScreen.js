import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signout } from '../services/firebase/firebaseAuth';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <Button title="sign out" onPress={signout}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
