/* eslint-disable react-native/no-inline-styles */

/* eslint-disable no-unused-vars */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import KulKul from '../components/KulKul';
import bg from '../assets/images/bg.png';

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

const styles = StyleSheet.create({});
