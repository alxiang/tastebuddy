import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'

type FoodProps = {
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    special_notes: string[]
}

const Menu: FC<FoodProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.foodHeader}>
        <Text style={styles.foodName} value="Grilled Calamari" />
 
      </View>
      <Text value="this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  foodHeader: {
    display: "flex",
    flexDirection: "row",
  },
  foodName: {
    fontSize: 20,
  }
})
export default Menu
