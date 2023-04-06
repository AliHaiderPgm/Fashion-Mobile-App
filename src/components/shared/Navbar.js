import React from 'react'  
import { View, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from './Icon'

export default function Navbar() {
    const insets = useSafeAreaInsets()
    const navigation = useNavigation()
    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            {/* Hamburger */}
                <Icon
                    style={styles.image}
                    icon="menu"
                />

            {/* Logo */}
            <View>
                <Image source={require('../../../assets/universe-black.png')} style={styles.logo} />
            </View>

            <View style={styles.searchAndCart}>
                {/* SearchBar */}
                <Icon
                    onPress={() => navigation.navigate('searchBar')}
                    icon="search"
                    style={styles.image}
                />
                {/* Cart */}
                <Icon
                icon="cart"
                style={styles.image}
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
    image: {
        height: 23,
        width: 23,
        resizeMode: 'contain'
    },
    logo: {
        height: 30,
        width: 100,
        resizeMode: 'contain',
        marginLeft: 30
    },
    searchAndCart: {
        flexDirection: 'row',
        gap: 10
    },
})