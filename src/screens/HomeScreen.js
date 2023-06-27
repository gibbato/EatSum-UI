/**
 * HomeScreen.js
 */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';
import users from '../../assets/data/users';

import  Card  from '../components/RestaurantCard';

const ROTATION = 60;

const HomeScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = users[currentIndex];
  const nextProfile = users[nextIndex];

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

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: event => {
      
      }

  });



  return (
    <View style={styles.pageContainer}>
      <View style={styles.nextCardContainer}>
        <Card user={nextProfile} />
      </View>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card user={currentProfile} />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
  

      
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
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',
  },
  
});




export default HomeScreen;

