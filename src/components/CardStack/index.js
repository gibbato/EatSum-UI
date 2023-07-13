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
  withSpring,
  runOnJS
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';
import Like from '../../../assets/images/LIKE.png';
import Nope from '../../../assets/images/nope.png';


const ROTATION = 60;                    // degrees
const SWIPE_VELOCITY = 800;            // pixels per second


const CardStack = (props) => {

 const { data, restaurants, renderCard, renderInfoCard, swipeLeft, swipeRight } = props;             // data is the array of restaurants, renderItem is the function that renders the card, swipeLeft and swipeRight are the functions that are called when the card is swiped left or right

  const [currentIndex, setCurrentIndex] = useState(0);                 
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentRestaurant = data[currentIndex];
  const nextRestaurant = data[nextIndex];
  const restaurantInfo = restaurants[currentIndex];


  const { width: screenWidth } = useWindowDimensions();
 


  const hiddenTranslateX = 2 * screenWidth;


  const translateX = useSharedValue(0);
 

  const rotate = useDerivedValue(() => interpolate(             // maps card displacement to card rotation
    translateX.value,
     [0, hiddenTranslateX], 
     [0, ROTATION]) + 'deg',
  );

  const cardStyle = useAnimatedStyle(() => ({                // maps card displacement to card rotation and displacement
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));
  
  const nextCardStyle = useAnimatedStyle(() => ({               // maps card displacement to background stack scale and opacity
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1.1, 0.9, 1.1]
        ),
      },
    
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.6, 1]
    ),
  }));

  const infoCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [screenWidth * 2, 0, screenWidth * 2]
        ),
      },
    ],
  }));



  

  const likeStyle = useAnimatedStyle(() => ({           // maps card displacement to 'like' opacity
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
  }));

  const nopeStyle = useAnimatedStyle(() => ({           // maps card displacement to 'nope' opacity
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
  }));
  

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {                        // stores the initial position of touch
      context.startX = translateX.value;
    },
    onActive: (event, context) => {                   // updates the position of touch  
      translateX.value = context.startX + event.translationX;
      
    },
    onEnd: (event) => {                              // determines whether to swipe card off screen or recenter. also determines whether to call swipeLeft or swipeRight
        if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
            translateX.value = withSpring(0);
            
            return;
        }
        translateX.value = withSpring(
          hiddenTranslateX * Math.sign(event.velocityX),
          {},
          () => runOnJS(setCurrentIndex)(currentIndex + 1),
        );

        const swipe = event.velocityX > 0 ? swipeRight : swipeLeft;     // if velocity is positive, swipeRight is called. if velocity is negative, swipeLeft is called
        swipe && runOnJS(swipe)(currentRestaurant);


      }


  });

  useEffect(() => {                          // resets the card stack when the currentIndex changes
    translateX.value = withSpring(0);
    setNextIndex(currentIndex + 1);

  }, [currentIndex]);
  


  return (
    <View style={styles.root}>
      {nextRestaurant && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            {renderCard({ item: nextRestaurant })}
            <Animated.Image
              source={Like}
              style={[styles.like, { left: 10 }, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Nope}
              style={[styles.like, { right: 10 }, nopeStyle]}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      )}
      {currentRestaurant && (
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.animatedCard, cardStyle]}>
              {renderCard({ item: currentRestaurant })}
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      )}
      {currentRestaurant && (
        <Animated.View style={[styles.animatedInfoCard, infoCardStyle]}>
          {renderInfoCard({ item: restaurantInfo })}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '84.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedInfoCard: {
    width: '90%',
    height: '30%',
    justifyContent: 'flex-start',
   
  },
  like: {
    width: '20%',
    aspectRatio: 1,
    position: 'absolute',
    top: '3%',
    zIndex: 1,
  },
});




export default CardStack;