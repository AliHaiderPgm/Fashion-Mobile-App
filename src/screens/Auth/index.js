import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import Register from './Register'

export default function Index() {
    const AuthStack = createNativeStackNavigator()
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='login' component={Login}/>
      <AuthStack.Screen name='register' component={Register}/>
    </AuthStack.Navigator>
  )
}