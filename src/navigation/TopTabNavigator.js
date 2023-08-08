import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeIcon from '../../assets/images/HomeIcon.png';
import ProfileIcon from '../../assets/images/ProfileIcon.png';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        swipeEnabled={false}
        tabBarOptions={{
          style: styles.tabBar,
          showIcon: true,
          showLabel: false,
          iconStyle: styles.iconStyle,
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
          indicatorStyle: {
            backgroundColor: 'red',
            width: '1%',
            marginLeft: '14%',
            marginRight: '14%',
           opacity: 0.5,
           height: '3%',
          },
          style: {
            backgroundColor: '#F7F7F7',
          },
          
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={HomeIcon} style={[styles.icon, { tintColor: color }]} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image source={ProfileIcon} style={[styles.icon, { tintColor: color }]} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F7F7F7',
  },
  iconStyle: {
    width: 40,
    height: 40,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain', // Adjust the image's content mode
  },
});

export default TopTabNavigator;
