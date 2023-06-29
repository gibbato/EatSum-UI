/**
 * HomeScreen.js
 */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import users from '../../assets/data/users';

import  Card  from '../components/RestaurantCard';
import  CardStack  from '../components/CardStack';
import InfoCard from '../components/InfoCard';


const ROTATION = 60;                    // degrees
const SWIPE_VELOCITY = 800;            // pixels per second

const HomeScreen = () => {

  const poop = {
    name: 'restaurant name',
    cuisineType: 'food type',
    address: '123 food way',
    reviews: ['Great!', 'ight', 'pretty bad ):']
  }


  const swipeLeft = () => {
    console.warn('swipe left');
  }

  const swipeRight = () => {
    console.warn('swipe right');
  }

  return (
    <View style={styles.pageContainer}>
    <CardStack data={users} renderItem={({ item }) => (
       <View>
         <Card restaurant={item}   
           swipeLeft={swipeLeft}          
           swipeRight={swipeRight}
        />
               <InfoCard place={poop}/>

      </View>
  )}
    />   

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

