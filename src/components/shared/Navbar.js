import { View, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Navbar() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* Hamburger */}
            <Pressable>
                <Image
                    style={styles.image}
                    source={require('../../../assets/menu.png')}
                />
            </Pressable>

            {/* Logo */}
            <View>
                <Image source={require('../../../assets/universe-black.png')} style={styles.logo}/>
            </View>

            <View style={styles.searchAndCart}>
                {/* SearchBar */}
                <Pressable onPress={() => navigation.navigate('searchBar')}>
                    <Image source={require('../../../assets/search.png')} style={styles.image} />
                </Pressable>
                {/* Cart */}
                <Pressable>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/shopping-cart.png')}
                    />
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 42,
        marginBottom: 12,
        marginHorizontal: 18
    },
    image: {
        height: 23,
        width: 23,
        resizeMode: 'contain'
    },
    logo:{
        height:30,
        width:100,
        resizeMode:'contain',
        marginLeft:30
    },
    searchAndCart:{
        flexDirection:'row',
        gap:10
    },
})