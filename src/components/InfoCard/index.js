import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ place }) => {

    const { name, cuisineType, address, reviews } = place;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{cuisineType}</Text>
      <Text style={styles.info}>{address}</Text>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews:</Text>
        {reviews.map((review, index) => (
          <Text key={index} style={styles.review}>
            {review}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    elevation: 4,
    
    justifyContent: 'bottom',
   alignItems: 'bot',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
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
