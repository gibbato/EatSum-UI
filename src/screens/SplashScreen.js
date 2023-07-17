import React, {useEffect} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/images/EatSumLogo.png'

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
        }, 4000);

    return () => clearTimeout(timer);
  }, []);


   

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