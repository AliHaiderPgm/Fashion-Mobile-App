import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageCarousel from '../../components/shared/ImagesCarousel'
import Navbar from '../../components/shared/Navbar'
import ScreenHeader from '../../components/shared/HomeHeader'
import { CHILD_FEATURED_PRODUCTS, MENS_FEATURED_PRODUCTS, PRODUCTS, TOP_PRODUCTS, WOMENS_FEATURED_PRODUCTS, brands, data } from '../../data'
import { colors } from '../../components/constants/theme'
import SectionHeader from '../../components/shared/SectionHeader'
import ProductList from '../../components/shared/ProductList'
import ProductsCarousel from '../../components/shared/ProductsCarousel'
import Features from '../../components/shared/Features'
export default Home = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <ImageCarousel data={data} /> */}
                <ScreenHeader mainHeading="Find Your" secondTitle="Dream Style" />
                <ProductsCarousel list={TOP_PRODUCTS} inProductCard={false} />

                <SectionHeader
                    title="Popular Products"
                    onPress={() => { }}
                />
                <ProductList list={PRODUCTS} />

                <SectionHeader
                    title="Featured Brands"
                    showArrow={false}
                />
                <Features icons={brands} size={60} />

                {/* <SectionHeader
                    title="For Men"
                />
                <ProductsCarousel list={MENS_FEATURED_PRODUCTS} inProductCard={true} />

                <SectionHeader 
                title= "For Child"
                />
                <ProductsCarousel list={CHILD_FEATURED_PRODUCTS} inProductCard={true}/>

                <SectionHeader 
                title= "For Women"
                />
                <ProductsCarousel list={WOMENS_FEATURED_PRODUCTS} inProductCard={true}/> */}
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