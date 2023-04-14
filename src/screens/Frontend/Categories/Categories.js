import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenHeader from '../../../components/shared/ScreenHeader'
import CategoryCard from '../../../components/shared/CategoryCard'
import { CATEGORIES } from '../../../data'

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Categories" icon="search" navigateTo="search"/>
      <CategoryCard list={CATEGORIES}/>
    </View>
  )
}
const styles =StyleSheet.create({
  container: {},
})