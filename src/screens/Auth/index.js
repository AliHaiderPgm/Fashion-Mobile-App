import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import Register from './Register'
import { TransitionPresets } from '@react-navigation/stack';

export default function Index() {
    const AuthStack = createNativeStackNavigator()
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='login' component={Login} options={{...TransitionPresets.RevealFromBottomAndroid}}/>
      <AuthStack.Screen name='register' component={Register}/>
    </AuthStack.Navigator>
  )
}