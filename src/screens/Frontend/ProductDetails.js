import { View, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { sizes } from '../../components/constants/theme'

export default function ProductDetails({ navgation, route }) {
    const { product } = route.params
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.image} />
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer:{
        overflow: 'hidden',
        elevation: 7,
    },
    image:{
        width: sizes.width,
        height: sizes.height - 350,
        resizeMode: 'cover'
    }
})