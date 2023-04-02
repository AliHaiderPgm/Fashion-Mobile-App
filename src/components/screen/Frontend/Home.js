import React from 'react'
import { ScrollView, StyleSheet, Text, View} from 'react-native'
import Carousel from '../../shared/ImagesCarousel'
import Navbar from '../../shared/Navbar'
export default Home = () => {
    const data = [
        {
            uri: 'https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

        },
        {
            uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'
        },
        {
            uri: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            uri: 'https://images.unsplash.com/photo-1522682078546-47888fe04e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            uri: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
    ]
    return (
        <>
            <Navbar/>
            <ScrollView>
                <Carousel data={data}/>
                <View>
                    <Text style={styles.h1}>Find your style</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontSize:32,
        fontWeight:600,
    },
})