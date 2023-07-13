import React, {useEffect} from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Logo from '../../assets/images/EatSumLogo.png'

const SplashScreen = () => {
   

    return (
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6B6B',
      },
      logo: {
        width: 200,
        height: 200,
      },
    });

    export default SplashScreen;