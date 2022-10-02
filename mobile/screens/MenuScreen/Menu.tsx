import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'
import MenuFilter from './MenuFilter'
import MenuSection from './MenuSection'

type MenuProps = {}

const Menu: FC<MenuProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <MenuSection 
        isRecommended={true}
        name="Recommended Dishes"
        description="We know you're gonna like these ;)"
        foods={[
          {
            id: "1234",
            name: "Fried Calamari",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 1200,
            special_notes: ["spicy"],
            active: true
          },
          {
            id: "1234424",
            name: "Fried Jalapeno",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 6500,
            special_notes: ["gluten"],
            active: true
          },
          {
            id: "1234424",
            name: "Fried Jalapeno",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 6500,
            special_notes: ["gluten"],
            active: false
          },
        ]}
      />
            <MenuSection 
        isRecommended={true}
        name="Other Dishes"
        description="Some other food you might like"
        foods={[
          {
            id: "1234",
            name: "Fried Calamari",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 1200,
            special_notes: ["spicy"],
            active: true
          },
          {
            id: "1234424",
            name: "Fried Jalapeno",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 6500,
            special_notes: ["gluten"],
            active: true
          },
          {
            id: "1234424",
            name: "Fried Jalapeno",
            description: "this is yummy grilled calamari crispy fried tentacles, jalapeños, cilantro, whipped avocado",
            ingredients: ["calamari", "jalapenos", "cliantro"],
            price: 6500,
            special_notes: ["gluten"],
            active: false
          },
        ]}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
})
export default Menu
