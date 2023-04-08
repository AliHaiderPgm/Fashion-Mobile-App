import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { sizes } from '../constants/theme'
import { spacing } from '../constants/theme'

export default function UserHeader({ data }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image source={data.avatar} style={styles.avatar} />
                <Text style={styles.userName}>{data.username}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        height: 180,
        width: sizes.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        gap: spacing.s,
    },
    avatar: {
        height: 60,
        width: 60,
    },
    userName: {
        fontSize: sizes.title,
        fontWeight: 'bold'
    }
})