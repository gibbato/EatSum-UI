import axios from 'axios';

const API_KEY = '9DXAJwv4Gqx_cwXF_1aM7_WJKy6zhUC9u70GM1tqooXA25b2vHPEZXjA4eWRFY8UeXlkYlHzPyPkD49y9zf_sf4e9SuCou587oH59MweyqP-GlrtaEO-sU6FZnPBZHYx'; // Replace with your actual Yelp API key

const getNearbyRestaurants = async (latitude, longitude) => {
  const apiUrl = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&categories=restaurants&limit=20`; //max = 50

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log('API CALLED')
    console.log('response.data.businesses: ', response.data.businesses);
    return response.data.businesses;
  } catch (error) {
    console.error('Error fetching nearby restaurants:', error);
    return [];
  }
};

export default getNearbyRestaurants;