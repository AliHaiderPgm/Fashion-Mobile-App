import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, sizes, spacing } from '../../components/constants/theme'
import ScreenHeader from '../../components/shared/ScreenHeader'
import Counter from '../../components/shared/Counter'
import Icon from '../../components/shared/Icon'

export default function ProductDetails({ navgation, route }) {
  const { product } = route.params

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  // Function to handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  // Function to handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  const fromChild = (data) => {
    setPrice(data.number)
    setQuantity(data.count)
  }

  const handleAddTOCart = ()=> {
    const cartProduct = {
      details: product,
      quantity,
      price,
    }

    if(selectedSize === null){alert('Please select a size')}
    else if(selectedColor === null){alert('Please select a color')}
    else(AddToCart(cartProduct))
  }

  const AddToCart = (cartProduct)=>{
    alert('Added to cart')
  }

  const sizes = ['S', 'M', 'L', 'XL',]
  const colors = ['#ef233c', '#2ec4b6', '#a2d2ff', '#6c757d', '#001233']

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader icon="heartOutline" navigateTo="Home" style={styles.header} />
      <ScrollView style={styles.container}>


        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.image} />
        </View>


        <View style={styles.detailsWrapper}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.desc}>{product.description}</Text>
          </View>

          <Text style={styles.label}>Size:</Text>
          <View style={styles.selectionContainer}>
            {sizes.map((size, index) => {
              return <TouchableOpacity
                key={index}
                style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
                onPress={() => handleSizeSelection(size)}
                activeOpacity={0.5}
              >
                <Text style={styles.buttonText}>{size}</Text>
              </TouchableOpacity>
            })}
          </View>

          <Text style={styles.label}>Color:</Text>
          <View style={styles.selectionContainer}>
            {colors.map((color, index) => {
              return <TouchableOpacity
                key={index}
                style={[styles.colorButton, selectedColor === color && styles.selectedColorButton]}
                onPress={() => handleColorSelection(color)}
                activeOpacity={0.5}
              >
                <View style={[styles.color, { backgroundColor: color }]} />
              </TouchableOpacity>
            })}
          </View>

          <Text style={styles.label}>Quantity:</Text>
          <Counter sendToParent={fromChild} productPrice={product.price} />

        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={()=> handleAddTOCart()}>
          <Text style={styles.price}>${price}</Text>
          <View style={styles.addToCartWrapper}>
            <Icon icon="cart" size={23} />
            <Text style={styles.addToCartText}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    alignContent:'center',
    backgroundColor: colors.white
  },
  header: {
    position: 'absolute',
    width: sizes.width,
    zIndex: 1,
  },
  container: {
    marginBottom: spacing.xl,
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height - 350,
    resizeMode: 'cover',
  },
  detailsWrapper: {
    position: 'relative',
    top: -20,
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.radius + 20,
    borderTopRightRadius: sizes.radius + 20,
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.l,
  },
  titleContainer: {
    marginBottom: spacing.s,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: sizes.h3,
    color: colors.gray
  },
  label: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
    marginBottom: spacing.s,
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: spacing.m,
  },
  sizeButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.radius,
    borderWidth: 1,
    borderColor: colors.lightGray,
    marginRight: spacing.s,
    paddingVertical: spacing.s,
  },
  buttonText: {
    fontSize: sizes.h3,
  },
  selectedSizeButton: {
    borderColor: colors.black,
    borderWidth: 1.4,
  },
  colorButton: {
    borderRadius: sizes.radius,
    height: 34,
    width: 34,
    marginRight: spacing.m - 5,
    paddingVertical: spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedColorButton: {
    borderWidth: 1,
  },
  color: {
    height: 26,
    width: 26,
    borderRadius: sizes.radius,
  },
  buttonWrapper:{
    position: 'absolute',
    bottom: 10,
    left: 25,
    width: sizes.width - 50,
  },
  button: {
    backgroundColor: colors.gold,
    borderRadius: sizes.radius,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.m,
    // marginHorizontal: spacing.xl,
    // marginVertical: spacing.m,
  },
  price: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
  },
  addToCartWrapper: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginVertical: spacing.s,
    padding: spacing.s,
    borderRadius: sizes.radius,
    gap: 14,
  },
  addToCartText: {
    fontSize: sizes.h3,
    fontWeight: '600'
  },
})