import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import Food from './Food'
import { Text } from '../../components/building-blocks'
import { Food as FoodType } from '../../types'

type SectionProps = {
  isRecommended: boolean
  name: string
  description?: string
  foods: any
  addItem: (food: FoodType) => void
}

const MenuSection: FC<SectionProps> = ({ isRecommended, name, description, foods, addItem }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name} value={name} />
        {description && <Text style={styles.description} value={description} />}
      </View>
      {foods.map((food: any) => {
        if (food.active) return <Food key={food.id} {...food} addItem={addItem} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    borderWidth: 2,
    padding: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
  },
  description: {
    textAlign: 'center',
    paddingBottom: 10,
  },
})
export default MenuSection
