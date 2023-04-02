import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screen/About';
import Contact from '../screen/Contact';

export default function Drawer() {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={About} />
      <Drawer.Screen name="Article" component={Contact} />
    </Drawer.Navigator>
  )
}