import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoCard = ({ restaurant }) => {
  const { name, phone, display_address, rating } = restaurant;



  return (
    <View style={styles.container}>
      <View style={styles.marginLine} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
          <Text style={styles.address}>{}</Text>

        </View>
        <Text style={styles.reviewsTitle}>Rating: {rating}</Text>


      </View>

      {/* Render your reviews content here */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    padding: 16,
    borderRadius: 8,
    baclgroundColor: '#FFFFFF',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  phone: {
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

});

export default InfoCard;
