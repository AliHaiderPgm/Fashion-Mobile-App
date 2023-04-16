import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchBar from '../components/shared/SearchBar'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreenProvider from '../components/shared/SplashScreen'
import TabNavigator from './TabNavigator'
import Cart from '../screens/Frontend/Cart'
import ProductDetails from '../screens/Frontend/ProductDetails'
import Auth from '../screens/Auth'

export default function index() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <SplashScreenProvider />
            <Stack.Navigator>
                <Stack.Screen
                    name='Root'
                    component={TabNavigator}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name='search'
                    component={SearchBar}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='cart'
                    component={Cart}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='productDetail'
                    component={ProductDetails}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='auth'
                    component={Auth}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}