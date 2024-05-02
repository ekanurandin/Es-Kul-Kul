/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const KulKul = () => {
  return (
    <TouchableOpacity>
      <View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            paddingTop: 10,
            fontSize: 20,
          }}>
          Selamat Datang di Es Kul Kul YMM
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default KulKul;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
