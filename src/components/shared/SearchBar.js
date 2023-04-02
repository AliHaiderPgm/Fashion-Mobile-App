import { View, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {
    const [text, setText] = useState('')
    const navigation = useNavigation()
    return (
        <View style={styles.mainContainer}>
            <Pressable onPress={()=>navigation.goBack()}>
            <Image source={require('../../../assets/left-arrow.png')} style={styles.navigation} />
            </Pressable>
            <View style={styles.searchContainer}>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search Universe"
                        cursorColor='black'
                        autoFocus={true}
                        selectionColor='skyblue'
                        value={text}
                        onChangeText={(s) => {
                            setText(s)
                        }}
                    />
                </View>
                {
                    text ?
                        <TouchableOpacity onPress={() => {
                            setText('')
                        }}>
                            <Image
                                style={styles.image}
                                source={require('../../../assets/close.png')}
                            />
                        </TouchableOpacity>
                        : <View style={styles.image} />
                }
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop: 42,
        gap:8,
        paddingHorizontal:15
    },
    navigation:{
        height:28,
        width:28,
        resizeMode:'contain'
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 30,
    },
    image: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    textInput: {
        width: '100%',
        fontSize: 16
    }
})