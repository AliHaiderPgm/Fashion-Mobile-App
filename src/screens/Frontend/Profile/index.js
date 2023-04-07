import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './Profile'

export default function Index() {
    const ProfileNavigator = createNativeStackNavigator()
  return (
    <ProfileNavigator.Navigator>
      <ProfileNavigator.Screen name="Home" component={Profile} options={{headerShown: false}}/>
    </ProfileNavigator.Navigator>
  )
}