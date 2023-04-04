import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageCarousel from '../../shared/ImagesCarousel'
import Navbar from '../../shared/Navbar'
import ScreenHeader from '../../shared/ScreenHeader'
import { PRODUCTS, TOP_PRODUCTS, data } from '../../../data'
import { colors } from '../../constants/theme'
import SectionHeader from '../../shared/SectionHeader'
import ProductList from '../../shared/ProductList'
import TopProducts from '../../shared/TopProducts'
export default Home = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView showsVerticalScrollIndicator={false}>
            {/* <ImageCarousel data={data} /> */}
                <ScreenHeader mainHeading="Find Your" secondTitle="Dream Style" />
                <TopProducts list={TOP_PRODUCTS} />
                <SectionHeader 
                title="Popular Products" 
                buttonTitle="See All"
                onPress={()=>{}}
                />
                <ProductList list={PRODUCTS} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.light,
    },
})