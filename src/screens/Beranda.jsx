/* eslint-disable react-native/no-inline-styles */

/* eslint-disable no-unused-vars */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import bg from '../assets/images/Background.png';

const Beranda = () => {
  return (
    <View style={{backgroundColor: '#FFE3AE'}}>
      <Image
        source={bg}
        style={{width: 370, height: 700, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  // eslint-disable-next-line prettier/prettier
  WelcomeText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    // eslint-disable-next-line prettier/prettier
    marginBottom:20,
  },
});
