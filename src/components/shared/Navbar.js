import React from 'react'
import { View, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from './Icon'
import { spacing } from '../constants/theme'

export default function Navbar() {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            {/* Hamburger */}
            <Icon
                icon="menu"
                size={25}
            />

            {/* Logo */}
            <View>
                <Image source={require('../../../assets/universe-black.png')} style={styles.logo} />
            </View>

            <View style={styles.searchAndCart}>
                {/* SearchBar */}
                <Icon
                    onPress={() => navigation.navigate('search')}
                    icon="search"
                    style={styles.image}
                    size={25}
                />
                {/* Cart */}
                <Icon
                    icon="cart"
                    size={25}
                    onPress={() => navigation.navigate('cart')}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingHorizontal: 25,
        paddingTop: 10,
    },
    logo: {
        height: 32,
        width: 100,
        resizeMode: 'contain',
        marginLeft: 30
    },
    searchAndCart: {
        flexDirection: 'row',
        gap: 12
    },
})