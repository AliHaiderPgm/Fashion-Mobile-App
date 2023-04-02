import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'


const {width} = Dimensions.get('window')
const height = width * 0.68
export default function Carousel(props) {
    const data = props.data;
    const [isActive, setIsActive] = useState(0)
    const change = ({nativeEvent})=>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== isActive){
            setIsActive(slide)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ScrollView 
            horizontal 
            pagingEnabled
            showsHorizontalScrollIndicator={false}  
            onScroll={e=> change(e)}
            style={styles.scroll}>
                {
                    data.map((doc, i) => {
                        return (
                            <Image
                            key={i}
                            style={styles.image}
                            source={{uri: doc.uri}}
                            />
                        )
                    })
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    data.map((d,i)=>{
                        return (
                            <View key={i} style={i==isActive ? styles.pagingActive : styles.paging} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width,
        height,
        marginTop:-10,
    },
    scroll: {
        width: width + 0.19, 
        height,
    },
    image: {
        resizeMode:'cover',
        height,
        width: width,
        },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    paging: {
        height: 8, 
        width: 11, 
        borderRadius: 11 / 2 , 
        backgroundColor: '#777', 
        margin: 2, 
        marginBottom: 10,
    },
    pagingActive: {
        height: 8,
        width: 25, 
        borderRadius: 11/2 ,
        backgroundColor: '#fff', 
        margin: 2, 
        marginBottom: 10
    },
})