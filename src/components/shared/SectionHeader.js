import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, sizes, spacing } from '../constants/theme'
import Icon from './Icon'

export default function SectionHeader({ title, onPress, showArrow = true }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      { showArrow &&
        <TouchableOpacity style={styles.btnContainer}>
          <Icon icon="rightArrow" size={21} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold'
  },
  btnContainer: {
    flexDirection: 'row'
  },
})