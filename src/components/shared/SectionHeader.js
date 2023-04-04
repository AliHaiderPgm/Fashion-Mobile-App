import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { colors, sizes, spacing } from '../constants/theme'

export default function SectionHeader({title,onPress, buttonTitle,}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={buttonTitle} color={colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.m
    },
    title:{
        fontSize: sizes.h3,
        fontWeight: 'bold'
    },
})