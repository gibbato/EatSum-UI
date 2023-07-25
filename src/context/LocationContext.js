import React, { createContext, useState, useEffect } from "react";
import getCurrentPosition from "../utils/geolocation"; // Import the existing getCurrentPosition function

// Create the LocationContext
export const LocationContext = createContext();

// Create the LocationContext Provider component
export const LocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  // Function to get the user's current location using the existing getCurrentPosition function
  const getUserLocation = () => {
    getCurrentPosition()
      .then((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      })
      .catch((error) => setError(error.message));
  };

  // Fetch the user's location when the component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ userLocation, setUserLocation, error }}>
      {children}
    </LocationContext.Provider>
  );
};
