import Geolocation from '@react-native-community/geolocation';

export default function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      { enableHighAccuracy: true, maximumAge: 10000 },
    );
  });
}