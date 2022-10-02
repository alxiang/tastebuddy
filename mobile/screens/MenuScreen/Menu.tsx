import React, { FC, useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import MenuSection from './MenuSection'
import tasteBuddy from '../../api/tasteBuddyApi'
import { Text } from '../../components/building-blocks'
import MenuFilter from './MenuFilter'
import { Menu as MenuType } from '../../types'
import UserContext from '../../context/UserContext'

type MenuProps = {}

const HARVEST_ID = "d4912fe9-2aaf-42bb-90a4-b9e443206ef5";
const USER_ID = "c15834b0-a135-4ae0-8791-919aa66dc784";

const Menu: FC<MenuProps> = () => {

  const { user } = useContext(UserContext);
  const [foods, setFoods] = useState([])
  const [menu, setMenu] = useState<MenuType>()

  useEffect(() => {
    tasteBuddy
      .get(`menu/${HARVEST_ID}/`)
      .then((res) => {
        setMenu(res.data[0][0])
      })
      .catch((err) => {
        console.log('Something went wrong', err.response)
      })
  }, [])

  useEffect(() => {
    if (!!menu) {
      tasteBuddy
        .get(`food/${menu.id}/${USER_ID}/`)
        .then((res) => {
          console.log(res)
        })
    }
  }, [menu])

  const getSections = (foods: Food[]) => {
    const sections = {}
    for (const food of foods) {
      if (sections.hasOwnProperty(food.section)) {

      } else {
        // sections[food.section] = ""
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <MenuSection 
        isRecommended={true}
        name="Recommended Dishes"
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
