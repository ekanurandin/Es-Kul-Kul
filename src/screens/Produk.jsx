import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Img1 from '../assets/images/kulkul.png';

const Produk = () => {
  return (
    <View>
      <Text>Produk Es Kul-Kul</Text>
      <Image
        source={Img1}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 200, height: 200}}
      />
      <Text>Es Kul Kul Buah</Text>
    </View>
  );
};

export default Produk;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
