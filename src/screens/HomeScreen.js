/**
 * HomeScreen.js
 */
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from './SplashScreen';

import users from '../../assets/data/users';
import restaurantInfo from '../../assets/data/restaurantInfo';

import Card from '../components/RestaurantCard';
import CardStack from '../components/CardStack';
import InfoCard from '../components/InfoCard';

const ROTATION = 60; // degrees
const SWIPE_VELOCITY = 800; // pixels per second

const HomeScreen = () => {
  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {

   { /* SPLASH SCREEN */}

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  { /* SPLASH SCREEN */}

  const swipeLeft = () => {
    console.warn('swipe left');
  };

  const swipeRight = () => {
    console.warn('swipe right');
  };

  return (
    <View style={styles.pageContainer}>
      <CardStack
        data={users}
        renderCard={({ item }) => (
          <View>
            <Card restaurant={item} swipeLeft={swipeLeft} swipeRight={swipeRight} />
          </View>
        )}
        restaurants={restaurantInfo}
        renderInfoCard={({ item }) => <InfoCard restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default HomeScreen;
