import { View } from 'react-native'
import React, { useCallback, useEffect, useState }from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function SplashScreenProvider() {

    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync(Entypo.font);
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <View onLayout={onLayoutRootView}></View>
        </>
    )
}