/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const KulKul = () => {
  return (
    <TouchableOpacity>
      {/* <View style={styles.box}>
        <Text style={{color: 'black'}}>icon</Text>
      </View>
      <Text>{label}</Text> */}
      <View>
        <Text style={{color: 'black', textAlign: 'center', paddingTop: 10}}>
          Selamat Datang di Es Kul Kul YMM
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default KulKul;

const styles = StyleSheet.create({
  // container: {
  //   borderWidth: 1,
  //   margin: 5,
  //   padding: 5,
  //   width: 60,
  //   alignItems: 'center',
  // },
  // box: {
  //   borderWidth: 1,
  //   width: 48,
  //   height: 48,
  //   borderRadius: 8,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   color: 'black',
  // },
});
