import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import Food from "./Food"
import { FaPepperHot } from 'react-icons/fa'
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
        return <Food {...food}/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
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
