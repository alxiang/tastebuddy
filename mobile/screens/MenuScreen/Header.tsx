import React, { FC, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from '../../components/building-blocks'
import Colors from '../../constants/Colors'
import MenuFilter from './MenuFilter'

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text value="Harvest" style={styles.restaurantName} />
      <MenuFilter />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
    zIndex: 100
  },
  restaurantName: {
    color: Colors.red,
    fontSize: 24,
    alignSelf: 'center',
  },
  filterButton: {
    color: Colors.black,
  },  
})

export default Header
