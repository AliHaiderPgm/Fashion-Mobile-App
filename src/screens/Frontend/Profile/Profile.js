import { View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../../components/shared/ScreenHeader'
import { SETTING_OPTIONS, USERS } from '../../../data'
import UserHeader from '../../../components/shared/UserHeader'
import Options from '../../../components/shared/Options'

export default function Profile() {
  return (
    <View>
      <ScreenHeader title="Profile" icon="cart" navigateTo="cart"/>
      <UserHeader data={USERS[1]}/>
      <Options list={SETTING_OPTIONS}/>
    </View>
  )
}