import React from 'react'
import { View, StyleSheet } from 'react-native'
import ProductCard from './ProductCard';


export default function ProductList({ list }) {
    return (
        <View style={styles.container}>
            {list.map((item) => {
                return (
                    <ProductCard cardData={item} key={item.id} carousel={false}/>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})