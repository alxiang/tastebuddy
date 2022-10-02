import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import Food from "./Food"
import { Text } from '../../components/building-blocks'

type SectionProps = {
  isRecommended: boolean,
  name: string,
  description?: string,
  foods: any
}

const MenuSection: FC<SectionProps> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name} value={props.name} />
        {props.description && (<Text style={styles.description} value={props.description} />)}
      </View>
      {props.foods.map((food: any) => {
        if (food.active) return <Food key={food.id} {...food}/>;
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
    textAlign: "center",
    fontSize: 20,
  },
  description: {
    textAlign: "center",
    paddingBottom: 10,
  },
})
export default MenuSection
