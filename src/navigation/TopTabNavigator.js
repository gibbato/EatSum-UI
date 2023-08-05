import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
 <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator style={styles.backgroundColor}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  pageContainer: {
     backgroundColor: 'rgba(255, 255, 255, 0.5)', //transparent background
     showIcon: true,  // Show icons instead of names
     iconStyle: { width: 30, height: 30 },
     activeTintColor: 'blue',
      inactiveTintColor: 'gray',



  },
});

export default TopTabNavigator;