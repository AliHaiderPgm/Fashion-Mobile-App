import { View, Text } from 'react-native'
import React from 'react'
import ScreenHeader from '../../../components/shared/ScreenHeader'

export default function Profile() {
  return (
    <View>
      <ScreenHeader title="Profile" searchIcon={false}/>
    </View>
  )
}