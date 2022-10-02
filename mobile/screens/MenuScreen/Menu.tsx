import React, { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'
import MenuFilter from './MenuFilter'

type MenuProps = {}

const Menu: FC<MenuProps> = () => {
  return (
    <ScrollView style={styles.container}>
      <Text value="Taste profile recommendations" />

      <Text value="Menu selections" />

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
