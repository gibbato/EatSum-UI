/**
 * HomeScreen.js
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

import { signout } from "../services/firebaseAuth";

import users from "../../assets/data/users";
import restaurantInfo from "../../assets/data/restaurantInfo";

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

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View>
        <Button onPress={signout} title="signout"></Button>
      </View>
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
          <ScrollView style={styles.infoCard}>
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
