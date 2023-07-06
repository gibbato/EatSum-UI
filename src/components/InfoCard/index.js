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
    backgroundColor: '#F7F7F7',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cuisineType: {
    fontSize: 18,
    marginBottom: 4,
    color: '#666666',
  },
  address: {
    fontSize: 18,
    marginBottom: 8,
    color: '#666666',
  },
  reviewsContainer: {
    marginTop: 16,
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  review: {
    fontSize: 16,
    marginBottom: 4,
    color: '#666666',
  },
});

export default InfoCard;