import React from 'react'
import { Image, StyleSheet, TouchableHighlight } from 'react-native'
import { View, Text, FlatList } from 'react-native'
import { colors, shadow, sizes, spacing } from '../constants/theme'


const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 180;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;
export default function TopProducts({ list }) {
    return (
        <FlatList
            data={list}
            keyExtractor={i => i.id}
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate="fast"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <TouchableHighlight 
                    style={{
                        marginLeft: spacing.l,
                        marginRight: index === list.length - 1 ? spacing.l : 0
                    }}>
                        <View style={[styles.card, shadow.dark]}>
                            <View style={styles.imageConatiner}>
                                <Image source={item.image} style={styles.image} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                )
            }} />
    )
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius: sizes.radius
    },
    imageConatiner: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: sizes.radius,
        overflow: 'hidden',
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover'
    },
    textContainer:{
        position: 'absolute',
        top: CARD_HEIGHT - 70,
        left: 16
    },
    title:{
        fontSize: sizes.h2,
        fontWeight: 'bold',
        color: colors.white,
    },
    price:{
        fontSize: sizes.h2,
        color: colors.white
    }
})