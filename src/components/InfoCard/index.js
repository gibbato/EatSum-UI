import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ restaurant }) => {
  const { name, cuisineType, address, reviews } = restaurant;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.cuisineType}>{cuisineType}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.reviewsTitle}>{reviews}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cuisineType: {
    fontSize: 16,
    marginBottom: 4,
  },
  address: {
    fontSize: 16,
  },
  reviewsContainer: {
    marginTop: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default InfoCard;
