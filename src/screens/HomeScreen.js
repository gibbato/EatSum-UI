/**
 * HomeScreen.js
 */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, useWindowDimensions} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';
import users from '../../assets/data/users';
import Like from '../../assets/images/LIKE.png';
import Nope from '../../assets/images/nope.png';

import  Card  from '../components/RestaurantCard';

const ROTATION = 60;                    // degrees
const SWIPE_VELOCITY = 800;            // pixels per second


const HomeScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(0);                
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentRestaurant = users[currentIndex];
  const nextRestaurant = users[nextIndex];

  const {width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(
    translateX.value,
     [0, hiddenTranslateX], 
     [0, ROTATION]) + 'deg',
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));
  
  const nextCardStyle = useAnimatedStyle(() => ({               // maps card displacement to scale and opacity
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.9, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.6, 1]
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
  }));
  

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
        if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
            translateX.value = withSpring(0);
            return;
        }
        translateX.value = withSpring(
          hiddenTranslateX * Math.sign(event.velocityX),
          {},
          () => runOnJS(setCurrentIndex)(currentIndex + 1),
        );
      }

  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex]);
  


  return (
    <View style={styles.pageContainer}>
      {nextRestaurant && (
      <View style={styles.nextCardContainer}>
        <Animated.View style={[styles.animatedCard, nextCardStyle]}>
        <Card user={nextRestaurant} />
          <Image 
           source={Like} 
           style={[styles.like, {left: 10}, likeStyle]}
             resizeMode="contain" /> 
          <Image
           source={Nope}
           style={[styles.like, {right: 10}, nopeStyle]}
             resizeMode="contain"/>
        
        </Animated.View>
      </View>
      )}
      {currentRestaurant && (
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card user={currentRestaurant} />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
  )}
  

      
    </View>
  );
};



const styles = StyleSheet.create({
  pageContainer: {                   // This is the view that contains the card  
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
    zIndex: 1,
    elevation: 1,
  }
  
});




export default HomeScreen;

