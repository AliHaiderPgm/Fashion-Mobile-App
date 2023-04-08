import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { colors, sizes, spacing } from '../constants/theme'

export default function OptionCard({ data }) {
    return (
        <View style={styles.cardWrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.icon}>
                    <Icon icon={data?.icon} size={25} />
                </View>
            </View>
            <View style={styles.next}>
                <Icon icon="next" size={25} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cardWrapper: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.m,
    },
    textWrapper: {
        flexDirection: 'row-reverse',
        gap: spacing.m,
        height: '100%',
        alignItems: 'center',
    },
    icon: {
        borderWidth: 0.15,
        borderColor: colors.gold,
        padding: spacing.m - 5,
        borderRadius: sizes.radius,
        backgroundColor: colors.lightGold,
    },
    title: {
        fontSize: sizes.h2,
        fontWeight: '600'
    },
    next: {
        borderWidth: 0.3,
        borderColor: colors.black,
        padding: spacing.m - 10,
        borderRadius: sizes.radius,
    }
})