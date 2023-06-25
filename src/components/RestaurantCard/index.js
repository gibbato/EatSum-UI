import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

const Card = (props) => {
    
    const {name, image, bio} = props.user;

    return (
        <View style={styles.card}>
        {/* ImageBackground component to display the background image */}
        <ImageBackground
          source={{ uri: image }}
          style={styles.image}
        >
          <View style={styles.cardInner}>
            {/* Text component to display the name */}
            <Text style={styles.name}>{name}</Text>
            {/* Text component to display the bio */}
            <Text style={styles.bio}>{bio}</Text>
          </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
         card: {                           // This is the view that contains the image
          width: '95%',
          height: '70%',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
        },
        image: {                         // This is the image  
          width: '100%',
          height: '100%',
          borderRadius: 10,
          overflow: 'hidden',
          justifyContent: 'flex-end',   // Align the content at the bottom of the image
        },
        cardInner: {                   // This is the view that contains the name and bio
          padding: 10,
        },
        name: {                       
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold',
        },
        bio: {
          fontSize: 18,
          color: 'white',
          lineHeight: 25,
        },
      });

export default Card;