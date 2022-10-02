import React, { FC, useContext, useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import MenuSection from './MenuSection'
import tasteBuddy from '../../api/tasteBuddyApi'
import { Text } from '../../components/building-blocks'
import MenuFilter from './MenuFilter'
import { Food, Menu as MenuType } from '../../types'
import UserContext from '../../context/UserContext'

type MenuProps = {}

const HARVEST_ID = 'd4912fe9-2aaf-42bb-90a4-b9e443206ef5'
const USER_ID = 'c15834b0-a135-4ae0-8791-919aa66dc784'

const Menu: FC<MenuProps> = () => {
  const { user } = useContext(UserContext)
  const [foods, setFoods] = useState<Food[]>([])
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
      tasteBuddy.get(`food/${menu.id}/${USER_ID}/`).then((res) => {
        setFoods(res.data[0])
      })
    }
  }, [menu])

  const getSections = (foods: Food[]) => {
    const sections: any = {}
    for (const food of foods) {
      if (sections.hasOwnProperty(food.section)) {
        sections[food.section].push({active: true,...food})
      } else {
        sections[food.section] = [{active: true,...food}]
      }
    }
    return sections
  }

  const applyFilter = (foods: Food[]) => {
    return foods;
  }

  const sections: any = getSections(applyFilter(foods))
  
  return (
    <ScrollView style={styles.container}>
      {sections &&
        Object.keys(sections).map((section) => {
          return <MenuSection key={section} isRecommended={false} name={section} foods={sections[section]} />
        })}
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
