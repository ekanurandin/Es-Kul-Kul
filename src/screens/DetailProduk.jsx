/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Img1 from '../assets/images/kulkul1.jpg';

export default function DetailProduk({ route }){
    const navigation = useNavigation();
    // eslint-disable-next-line no-unused-vars
    const { product } = route.params;

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <MaterialIcons name="chevron-left" size={30}  onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.productDetailsContainer}>
                <Image source={Img1} style={styles.productImage} />
                <Text style={styles.productTitle}>Produk</Text>
                <Text style={styles.productDescription}>/....</Text>
                <Text style={styles.productPrice}>.....</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    productDetailsContainer: {
        alignItems: 'center',
        padding: 20,
    },
    productImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
    },
    productDescription: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
        color: 'black',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'black',
    },
    addToCartButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
