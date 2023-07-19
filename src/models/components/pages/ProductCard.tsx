import React from "react";
import { StyleSheet, View, Dimensions, Image, Text, Button } from "react-native";

const { width } = Dimensions.get('window');

interface Props {
    name: string;
    price: number;
    image?: string;
    countInStock: number;
}

const ProductCard: React.FC<Props> = ({ name, price, image, countInStock }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                    uri: image
                        ? image
                        : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                }}
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
            </Text>
            <Text style={styles.price}>{price}</Text>
            {countInStock > 0 ? (
                <View style={{ marginBottom: 60 }}>
                    <button title={'Add'} color={'green'} />
                </View>
            ) : (
                <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>
            )}
            <Text style={styles.countInStock}>{countInStock}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom:5,
        marginLeft: 10,
        alignItems: 'center',
        elevations: 8,
        backgroundColor: 'white',

    },
    card: {
        width: '30%',
        height: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
    },
    image: {
        width: '70%',
        height: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    price: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
    },
});

export default ProductCard;
