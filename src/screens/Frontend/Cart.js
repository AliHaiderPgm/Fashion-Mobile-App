import { View, Text } from 'react-native'
import React from 'react'
import ScreenHeader from '../../components/shared/ScreenHeader'
import NoProductFound from '../../components/shared/NoProductFound'

export default function Cart() {
  return (
    <>
      <ScreenHeader title="Shopping Cart" />
      <NoProductFound />
    </>
  )
}