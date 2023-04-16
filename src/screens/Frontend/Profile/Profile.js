import { Button, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../../components/shared/ScreenHeader'
import { SETTING_OPTIONS, USERS } from '../../../data'
import UserHeader from '../../../components/shared/UserHeader'
import Options from '../../../components/shared/Options'
import { useNavigation } from '@react-navigation/native'

export default function Profile() {
  const navigation = useNavigation()
  return (
    <View>
      <ScreenHeader title="Profile" icon="cart" navigateTo="cart"/>
      <Button title="Login" onPress={()=> navigation.navigate("auth", {screen: 'login'})}/>
      <UserHeader data={USERS[1]}/>
      <Options list={SETTING_OPTIONS}/>
    </View>
  )
}