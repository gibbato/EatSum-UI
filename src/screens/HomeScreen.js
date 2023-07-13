/**
 * HomeScreen.js
 */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import SplashScreen from './SplashScreen';

import users from '../../assets/data/users';
import restaurantInfo from '../../assets/data/restaurantInfo';

import Card from '../components/RestaurantCard';
import CardStack from '../components/CardStack';
import InfoCard from '../components/InfoCard';

const ROTATION = 60; // degrees
const SWIPE_VELOCITY = 800; // pixels per second

const HomeScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const swipeLeft = () => {
    console.warn('swipe left');
  };

  const swipeRight = () => {
    console.warn('swipe right');
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    setScrollPosition(contentOffset.y);
  };



  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.pageContainer}>
      
        <CardStack
          data={users}
          renderCard={({ item }) => (
            <View>
              <Card
                restaurant={item}
                swipeLeft={swipeLeft}
                swipeRight={swipeRight}
              />
            </View>
          )}
          restaurants={restaurantInfo}
          renderInfoCard={({ item }) => (
        <ScrollView >
              <InfoCard restaurant={item} />
            </ScrollView>
          )}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FF6B6B',
  },
 
});

export default HomeScreen;
