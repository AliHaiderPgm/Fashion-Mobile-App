import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, sizes, spacing } from '../../components/constants/theme'
import ScreenHeader from '../../components/shared/ScreenHeader'
import Counter from '../../components/shared/Counter'

export default function ProductDetails({ navgation, route }) {
  const { product } = route.params

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const sizes = ['S', 'M', 'L', 'XL',]
  const colors = ['#ef233c', '#2ec4b6', '#a2d2ff', '#6c757d', '#001233']

  return (
    <>
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
          <Counter/>
        </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    width: sizes.width,
    zIndex: 1,
  },
  container: {
    // position: 'relative',
    // flex: 1,
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
    borderRadius: sizes.radius + 20,
    padding: spacing.m,
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
  }
})