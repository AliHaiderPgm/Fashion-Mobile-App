import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Frontend/Home';
import Categories from '../screens/Frontend/Categories';
import Profile from '../screens/Frontend/Profile';
import Icon from '../components/shared/Icon';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => {
          return <Icon icon="home" />
        }
      }} />
      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon: () => {
          return <Icon icon="categories" />
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => {
          return <Icon icon="profile" />
        }
      }} />
    </Tab.Navigator>
  )
}