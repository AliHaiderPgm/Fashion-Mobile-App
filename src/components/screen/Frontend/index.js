import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import SearchBar from '../../shared/SearchBar'

export default function index() {
    const Stack = createNativeStackNavigator()

    return (
        <>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='searchBar' component={SearchBar} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}