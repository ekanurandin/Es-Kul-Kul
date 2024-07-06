// eslint-disable-next-line prettier/prettier
import {StyleSheet,Text,View,Image} from 'react-native';
import React from 'react';
import rainbow from '../assets/images/rainbow.jpg';

const Tentang = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={rainbow} />
      <Text style={styles.title}>Kul Kul YMM</Text>
      <Text style={styles.description}>
        Kul-Kul YMM adalah Es Kulkul yang Terbuat Dari Buah yang dibalut Coklat.
      </Text>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE3AE',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#2f4f4f',
    paddingTop: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#696969',
    paddingTop: 10,
    marginHorizontal: 20,
  },
});
