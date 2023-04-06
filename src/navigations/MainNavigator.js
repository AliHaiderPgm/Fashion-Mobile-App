import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchBar from '../components/shared/SearchBar'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreenProvider from '../components/shared/SplashScreen'
import TabNavigator from './TabNavigator'

export default function index() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <SplashScreenProvider/>
            <Stack.Navigator>
                <Stack.Screen 
                name='Root' 
                component={TabNavigator} 
                options={{headerShown: false}} />

                <Stack.Screen 
                name='searchBar' 
                component={SearchBar} 
                options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}