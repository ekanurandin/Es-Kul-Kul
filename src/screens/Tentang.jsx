import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tentang = () => {
  return (
    <View>
      <Text style={styles.title}>Kul Kul YMM</Text>
      <Text style={styles.descripsion}>
        Kul-Kul YMM adalah Es Kulkul yang Terbuat Dari Buah yang dilapisi Coklat
      </Text>
    </View>
  );
};

export default Tentang;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    paddingTop: 10,
  },
  descripsion: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
    paddingTop: 10,
    margin: 10,
  },
});
