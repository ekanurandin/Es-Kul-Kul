import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import KulKul from '../components/KulKul';

// const Data = [
//   {id: 1, label: 'menu 1'},
//   {id: 2, label: 'menu 2'},
//   {id: 3, label: 'menu 3'},
//   {id: 4, label: 'menu 4'},
//   {id: 5, label: 'menu 5'},
//   {id: 6, label: 'menu 6'},
// ];

const Beranda = () => {
  return (
    <View>
      {/* <FlatList
        data={Data}
        renderItem={({item}) => <KulKul label={item.label} />}
        horizontal={true}
      /> */}
      <KulKul />
    </View>
  );
};

export default Beranda;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
