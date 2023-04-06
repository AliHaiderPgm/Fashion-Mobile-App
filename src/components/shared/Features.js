import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { colors, spacing } from '../constants/theme'

export default function Features({icons,size}) {
  return (
    <View style={styles.imageBox}>
        {
            icons.map((icon,index)=>{
                return(
                    <Image source={icon} key={index} style={[{height: size, width: size},styles.icon]}/>
                )
            })
        }
    </View>
  )
}

const styles = StyleSheet.create({
    imageBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.m,
        backgroundColor: colors.white,
    },
    icon: {
        resizeMode: 'contain',
        aspectRatio: 3/2
    },
})