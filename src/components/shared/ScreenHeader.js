import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { sizes, spacing } from '../constants/theme'

export default function ScreenHeader({mainHeading,secondTitle}) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{mainHeading}</Text>
      <Text style={styles.secondTitle}>{secondTitle}</Text>
      <Image source={require('../../../assets/icons/arc.png')} style={styles.shape}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:spacing.l,
        paddingVertical:spacing.s,
    },
    mainTitle:{
        fontSize:sizes.title,
        fontWeight:'bold',
      },
      secondTitle:{
        fontSize: sizes.title,
    },
    shape:{
      position: 'absolute',
      bottom: -13,
      left: '39%',
      zIndex: -1,
      height: 35,
      width: 35,
      resizeMode: 'contain',
      transform: [{rotate: '25deg'}]
    },
})