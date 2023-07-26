import AsyncStorage from '@react-native-async-storage/async-storage';


// Store entire list of restaurants in AsyncStorage
export const storeRestaurantData = async (restaurantData) => {
    try {
      // Serialize the restaurantData (convert it to a JSON string)
      const serializedData = JSON.stringify(restaurantData);
  
      // Store the serialized data in AsyncStorage with a unique key
      await AsyncStorage.setItem("restaurantData", serializedData);
  
      console.log('Restaurant data stored successfully.');
    } catch (error) {
      console.error('Error storing restaurant data:', error);
    }
  };
  
  // Retrieve entire list of restaurants from AsyncStorage
  export const getRestaurantData = async () => {
    try {
      // Retrieve the serialized data from AsyncStorage based on the key
      const serializedData = await AsyncStorage.getItem("restaurantData");
  
      if (serializedData) {
        // Deserialize the data (parse the JSON string back to an object)
        const restaurantData = JSON.parse(serializedData);
        return restaurantData;
      } else {
        console.log('Restaurant data not found.');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving restaurant data:', error);
      return null;
    }
  };

  // Function to clear the cache data
const clearCache = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Cache data cleared successfully.');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};
  

