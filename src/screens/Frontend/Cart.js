import React from 'react'
import ScreenHeader from '../../components/shared/ScreenHeader'
import NoProductFound from '../../components/shared/NoProductFound'
import { PRODUCTS } from '../../data'
import CartDetails from '../../components/shared/CartDetails'

export default function Cart() {
  return <>
    <ScreenHeader title="Shopping Cart" />
    <CartDetails list={PRODUCTS} />
    {/* <NoProductFound /> */}
  </>
}