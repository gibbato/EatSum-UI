import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const InfoCard = ({ restaurant }) => {
  const { name, cuisineType, address, reviews, dishes } = restaurant;

  const renderDishItem = ({ item }) => (
    <View style={styles.dishContainer}>
      <Text style={styles.dishName}>{item.name}</Text>
      <Text style={styles.dishDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.marginLine} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.cuisineType}>{cuisineType}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews:</Text>
        {/* Render your reviews content here */}
      </View>
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
    flexDirection: 'row',
    marginBottom: 10,
  },
  marginLine: {
    width: 4,
    backgroundColor: 'red',
    marginRight: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
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
  horizontalLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
    alignSelf: 'flex-end',
    marginBottom: 5,
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
  dishContainer: {
    marginBottom: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dishDescription: {
    fontSize: 16,
    color: '#666666',
  },
  dishesContainer: {
    flexGrow: 1,
  },
});

export default InfoCard;
