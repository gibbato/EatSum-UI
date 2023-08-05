import AsyncStorage from "@react-native-async-storage/async-storage";
import getCurrentPosition from "../utils/geolocation";
import getNearbyRestaurants from "./api/yelpFusionApi";

const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Store entire list of restaurants in AsyncStorage
export const storeCachedData = async (restaurantData) => {
  try {
    const timestamp = Date.now();
    const cacheData = { timestamp, restaurantData };
    // Serialize the restaurantData (convert it to a JSON string)
    const serializedData = JSON.stringify(cacheData);

    // Store the serialized data with a timestamp in AsyncStorage with a unique key
    await AsyncStorage.setItem("restaurantData", serializedData);

    console.log("Restaurant data stored successfully.");
  } catch (error) {
    console.error("Error storing restaurant data:", error);
  }
};

// Retrieve entire list of restaurants from AsyncStorage
export const getCachedData = async () => {
  try {
    // Retrieve the serialized data from AsyncStorage based on the key
    const serializedData = await AsyncStorage.getItem("restaurantData");
    if (serializedData) {
      // Deserialize the data (parse the JSON string back to an object)
      const cachedData = JSON.parse(serializedData);
      const { restaurantData, timestamp } = cachedData;
      const currentTime = Date.now();

      if (currentTime - timestamp <= CACHE_EXPIRATION_TIME) {
        console.log("data: ", restaurantData);
        // Data is still within the expiration time, return the cached data
        return restaurantData;
      }
      clearCache;
      const nearbyRestaurants = await getPositionAndNearbyRestaurants();
      await storeCachedData(nearbyRestaurants);
    } else {
      // Data is not found in cache, fetch nearby restaurants using geolocation
      const nearbyRestaurants = await getPositionAndNearbyRestaurants();

      // Update the cache with fresh data
      await storeCachedData(nearbyRestaurants);

      // Return the fresh data
      return nearbyRestaurants;
    }
  } catch (error) {
    console.error("Error retrieving restaurant data:", error);
    return null;
  }
};

const getPositionAndNearbyRestaurants = async () => {
  const position = await getCurrentPosition();
  console.log("position: ", position);
  const nearbyRestaurants = await getNearbyRestaurants(
    position.coords.latitude,
    position.coords.longitude
  );
  return nearbyRestaurants;
};

// Function to clear the cache data
const clearCache = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Cache data cleared successfully.");
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
};
