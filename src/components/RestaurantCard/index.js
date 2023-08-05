import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";

const Card = ({restaurant}) => {
  const { name, image_url, price, distance } = restaurant;

 const distanceInMiles = distance * 0.000621371
 const formattedDistance = distanceInMiles.toFixed(2);

  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: image_url }} style={styles.image}>
        <View style={styles.imageOverlay} />
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{price}   {formattedDistance} mi</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    aspectRatio: 0.75,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 18,
    color: "white",
    lineHeight: 25,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire image
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black overlay
  },
});

export default Card;
