import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '../constants/icons'

export default function Icon({ onPress, icon, style, size = 32 }) {
    const image = (
        <Image
            source={icons[icon]}
            style={[{ width: size, height: size, resizeMode: 'contain' }, style]}
        />
    )
    if (onPress) {
        return <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={{padding: 4}}>{image}</TouchableOpacity>
    }
    return image;
}