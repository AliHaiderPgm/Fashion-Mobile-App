import React from 'react'
import ScreenHeader from '../../components/shared/ScreenHeader'
import NoProductFound from '../../components/shared/NoProductFound'
import CartCard from '../../components/shared/CartCard'
import { PRODUCTS } from '../../data'
import { ScrollView } from 'react-native'

export default function Cart() {
  return <>
    <ScreenHeader title="Shopping Cart" />
    <ScrollView>
      <CartCard list={PRODUCTS} />
      {/* <NoProductFound /> */}
    </ScrollView></>
}