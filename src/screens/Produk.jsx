import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Img1 from '../assets/images/kulkul1.jpg';
import Img2 from '../assets/images/kulkul2.jpg';
import Img3 from '../assets/images/kulkul3.jpg';
import Img4 from '../assets/images/kulkul4.jpg';

const Produk = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Produk Es Kul-Kul</Text>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={Img1} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Semangka</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={Img2} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pepaya</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image source={Img3} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Strawberry</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={Img4} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Produk;

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 60,
    backgroundColor: '#FFE3AE',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFE3AE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#FFE3AE',
  },
  imageContainer: {
    width: '48%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});
