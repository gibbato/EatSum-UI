/**
 * HomeScreen.js
 */
import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

import users from '../../assets/data/users';

import  Card  from '../components/RestaurantCard';

const HomeScreen = () => {




  return (
    <View style={styles.pageContainer}>
      <Card user={users[3]}/>
    
  

      
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {                   // This is the view that contains the card  
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  
});

export default HomeScreen;

