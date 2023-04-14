import React from 'react'
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { colors, shadow, sizes, spacing } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';


const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;
export default function ProductCard({ cardData, carousel }) {
    const navigation = useNavigation()
    return (
        <>
            <TouchableHighlight activeOpacity={0.8} underlayColor={'transparent'} key={cardData.id} style={
                [
                    styles.cardContainer,
                    {
                        marginLeft: !carousel ? spacing.l : spacing.l - 15,
                        marginRight: !carousel ? 0 : spacing.l - 15
                    }
                ]
            }
            onPress={()=>navigation.navigate('productDetail',{product: cardData})}>
                <View style={[styles.card, shadow.light]}>
                    <View style={styles.imageContainer}>
                        <Image source={cardData.image} style={styles.image} />
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text style={styles.title}>{cardData.title}</Text>
                            <Text style={styles.price}>${cardData.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
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
    footer: {
        marginTop: 6,
        marginLeft: 16,
        marginRight: 10,
    },
    title: {
        marginVertical: 4,
        fontSize: sizes.body,
        color: colors.primary,
        fontWeight: 'bold',
    },
    price: {
        fontSize: sizes.body,
        color: colors.lightGray,
    }
})