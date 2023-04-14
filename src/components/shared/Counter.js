import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { sizes, spacing } from '../constants/theme'

export default function Counter({sendToParent,productPrice}) {
  const [count,setCount] = useState(1)
  useEffect(()=>{
    const number = count * productPrice
    sendToParent(number)
  },[count])
  const handleIncrement = ()=>{
    number = count + 1
    setCount(number)
  }
  const handleDecrement = ()=>{
    const number = count - 1
    setCount(number <= 1 ? 1 : number)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={()=> handleDecrement()}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={()=> handleIncrement()}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    gap: spacing.s,
  },
  button:{
    borderWidth:1,
    borderRadius: sizes.radius - 5,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s - 4,
  },
  buttonText:{
    fontSize: sizes.h2,
    fontWeight: 'bold'
  },
  count:{
    fontSize: sizes.h2 
  },
})