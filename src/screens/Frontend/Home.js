import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageCarousel from '../../components/shared/ImagesCarousel'
import Navbar from '../../components/shared/Navbar'
import ScreenHeader from '../../components/shared/ScreenHeader'
import { PRODUCTS, TOP_PRODUCTS, brands, data } from '../../data'
import { colors } from '../../components/constants/theme'
import SectionHeader from '../../components/shared/SectionHeader'
import ProductList from '../../components/shared/ProductList'
import TopProducts from '../../components/shared/TopProducts'
import Features from '../../components/shared/Features'
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

                <SectionHeader title="Featured Brands"/>
                <Features icons={brands} size={60}/>
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