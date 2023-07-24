import firestore from '@react-native-firebase/firestore';

// Function to fetch restaurants data from Firestore
export const fetchRestaurants = async () => {
  try {
    const snapshot = await firestore().collection('restaurants').limit(10).get();
    const restaurants = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('restaurants: ', restaurants);
    return restaurants;
  } catch (error) {
    console.error('Error fetching restaurants: ', error);
    throw error;
  }
};

// Function to fetch restaurant data by ID from Firestore
export const fetchRestaurantById = async (restaurantId) => {
  try {
    const docRef = firestore().collection('restaurants').doc(restaurantId);
    const doc = await docRef.get();
    if (doc.exists) {
        
      return { id: doc.id, ...doc.data() };
    } else {
      throw new Error('Restaurant not found');
    }
  } catch (error) {
    console.error('Error fetching restaurant by ID: ', error);
    throw error;
  }
};

