import { View, Text } from 'react-native'
import React from 'react'
import ScreenHeader from '../../../components/shared/ScreenHeader'
import { SETTING_OPTIONS, USERS } from '../../../data'
import UserHeader from '../../../components/shared/UserHeader'
import Options from '../../../components/shared/Options'

export default function Profile() {
  return (
    <View>
      <ScreenHeader title="Profile" searchIcon={false}/>
      <UserHeader data={USERS[1]}/>
      <Options list={SETTING_OPTIONS}/>
    </View>
  )
}