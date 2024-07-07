import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { useNavigation } from '@react-navigation/native';
import Img1 from '../assets/images/kulkul1.jpg';
import Img2 from '../assets/images/kulkul2.jpg';
import Img3 from '../assets/images/kulkul3.jpg';
import Img4 from '../assets/images/kulkul4.jpg';
import Img5 from '../assets/images/kulkul5.jpg';
import Img6 from '../assets/images/kulkul6.jpg';
import Img7 from '../assets/images/Kulkul7.jpg';
import Img8 from '../assets/images/kulkul8.jpeg';

const Produk = () => {
  const navigation = useNavigation();

  // eslint-disable-next-line prettier/prettier
  const handlePress = (productName) => {
    // eslint-disable-next-line prettier/prettier
    navigation.navigate('DetailProduk', { name: productName });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Produk Es Kul-Kul</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Semangka')}>
            <Image source={Img1} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Semangka</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pepaya')}>
            <Image source={Img2} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pepaya</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Strawberry')}>
            <Image source={Img3} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Strawberry</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pisang')}>
            <Image source={Img4} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pisang')}>
            <Image source={Img5} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pisang')}>
            <Image source={Img6} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pisang')}>
            <Image source={Img7} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => handlePress('Kul-Kul Pisang')}>
            <Image source={Img8} style={styles.image} />
            <Text style={styles.subtitle}>Kul-Kul Pisang</Text>
          </TouchableOpacity>
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
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
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
