/**
 * HomeScreen.js
 *  This component represents the main screen of the app, displaying a stack of restaurant cards
 * that users can swipe left or right to interact with. It also includes an option to sign out.
 */

import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import SplashScreen from "./SplashScreen";

import { signout } from "../services/firebase/firebaseAuth";

import users from "../../assets/data/users";
import restaurantInfo from "../../assets/data/restaurantInfo";
import getCurrentPosition from '../utils/geolocation';


import { fetchRestaurants } from "../services/firebase/firestore";

import Card from "../components/RestaurantCard";
import CardStack from "../components/CardStack";
import InfoCard from "../components/InfoCard";

const ROTATION = 60; // degrees
const SWIPE_VELOCITY = 800; // pixels per second

const HomeScreen = () => {

  const swipeLeft = () => {
    console.warn("swipe left");
  };

  const swipeRight = () => {
    console.warn("swipe right");
  };

    // State to store fetched restaurants data.
  const [restaurants, setRestaurants] = useState([]);


  useEffect(() => {
    // Call the getCurrentPosition() function and handle the result
    getCurrentPosition()
      .then(position => {
        // Handle the position data
        console.log('Latitude: ', position.coords.latitude);
        console.log('Longitude: ', position.coords.longitude);

      })
      .catch(error => {
        // Handle the error
        console.error('Error getting location: ', error);
      });
  }, []);


  // Fetch restaurants data from Firestore.
  useEffect(() => {
    const loadRestaurants = async () => {
      try {
      const fetchedRestaurants = await fetchRestaurants();
      setRestaurants(fetchedRestaurants);
      } catch (error) {
        console.error(error);
      }
    };
    loadRestaurants();
  }, []);


  

  return (
    <SafeAreaView style={styles.pageContainer}>
      {/* Sign out button */}
      <View>
        <Button onPress={signout} title="signout"></Button>
      </View>
       {/* CardStack: Stack of swipeable restaurant cards */}
      <CardStack
        data={restaurants}
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
          <ScrollView style={styles.infoCard}>
             {/* InfoCard: Displays detailed information about the restaurant */}
            <InfoCard restaurant={item} />
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#06D6A0",
  },
});

export default HomeScreen;
