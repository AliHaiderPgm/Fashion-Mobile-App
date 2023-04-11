import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { colors, shadow, sizes, spacing } from '../constants/theme'
import Icon from './Icon'

export default function CartCard({ list }) {

    const [cartItems, setCartItems] = useState(list)

    const handleIncrement = itemId => {
        const itemIndex = cartItems.findIndex(item => item.id === itemId)
        const updatedItem = [...cartItems]
        updatedItem[itemIndex].quantity++
        setCartItems(updatedItem)
    }

    const handleDecrement = itemId => {
        const itemIndex = cartItems.findIndex(item => item.id === itemId)
        const updatedItem = [...cartItems]
        updatedItem[itemIndex].quantity = updatedItem[itemIndex].quantity > 1 ? updatedItem[itemIndex].quantity - 1 : 1
        setCartItems(updatedItem)
    }

    return <View style={styles.container}>

        {cartItems.map(item => {
            return <View style={[shadow.dark, styles.cardWrapper]} key={item.id}>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => handleIncrement(item.id)}>
                        <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => handleDecrement(item.id)}>
                        <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image} />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>

                <TouchableOpacity style={styles.deleteButtonContainer}>
                    <Icon icon="close" size={13}/>
                </TouchableOpacity>
            </View>
        })}
    </View>
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.m,
        gap: spacing.s,
        height: sizes.height
    },
    cardWrapper: {
        paddingHorizontal: spacing.m,
        height: sizes.cardHeight,
        backgroundColor: colors.white,
        borderRadius: sizes.radius,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: spacing.s,
        flexDirection: 'row',
    },
    quantityContainer: {
        overflow: 'hidden',
        borderWidth: 0.5,
        borderRadius: sizes.radius,
        width: spacing.xl,
        height: sizes.cardHeight / 2 + 35,
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.s,
    },
    btn: {
        width: '100%',
        height: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: sizes.h2,
    },
    imageContainer:{
        width: 115,
        height: sizes.cardHeight / 2 + 35,
        borderRadius: sizes.radius,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    detailsContainer:{
        width: 80,
    },
    title:{
        fontSize: sizes.h3,
        fontWeight: 'bold',
    },
    price:{
        fontWeight: 'bold',
        fontSize: sizes.h3,
        color: colors.gold,
    },
    deleteButtonContainer: {
        position: 'relative',
        top: 15,
        padding: 4.5,
        alignSelf: 'flex-start',
    },
})