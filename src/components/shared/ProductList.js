import React from 'react'
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { colors, shadow, sizes, spacing } from '../constants/theme';


const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;
export default function ProductList({ list }) {
    return (
        <View style={styles.container}>
            {list.map((item) => {
                return (
                    <TouchableHighlight key={item.id} style={styles.cardContainer}>
                        <View style={[styles.card, shadow.light]}>
                            <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.image} />
                            </View>
                            <View style={styles.footer}>
                                <View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.price}>${item.price}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
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
    cardContainer: {
        marginLeft: spacing.l,
        marginBottom: spacing.l,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: colors.white,
        borderRadius: sizes.radius,
    },
    imageContainer: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopLeftRadius: sizes.radius,
        borderTopRightRadius: sizes.radius,
        overflow: 'hidden'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover'
    },
    footer:{
        marginTop: 6,
        marginLeft: 16,
        marginRight: 10,
    },
    title:{
        marginVertical:4,
        fontSize: sizes.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
    price:{
        fontSize: sizes.body,
        color: colors.lightGray,
    }
})