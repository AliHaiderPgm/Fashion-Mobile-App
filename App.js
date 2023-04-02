import 'react-native-gesture-handler';
import React from 'react';
import Frontend from './src/components/screen/Frontend'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/components/shared/SplashScreen';


export default App = () => {
    return (
        <NavigationContainer>
            <SplashScreen/>
            <Frontend />
        </NavigationContainer>
    );
}