import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'
import Colors from '../../constants/Colors'

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Text value="Harvest" style={styles.restaurantName} />
      <Text value="Edit Filters" style={styles.filterButton} />
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
