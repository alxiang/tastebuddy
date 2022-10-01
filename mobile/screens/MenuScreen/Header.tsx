import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'
import Colors from '../../constants/Colors'

type HeaderProps = {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text value="Taste Buddy" style={styles.tasteBuddyText} />
        <Text value="Profile" style={styles.profileButton} />
      </View>
      <Text value="Harvest" style={styles.restaurantName} />
      <View style={styles.bottomRow}>
        <Text value="Edit Filters" style={styles.filterButton} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButton: {
    color: Colors.black,
  },
  tasteBuddyText: {
    color: Colors.black,
    fontSize: 14,
  },
  restaurantName: {
    color: Colors.black,
    fontSize: 24,
    alignSelf: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterButton: {
    color: Colors.black,
  },
})

export default Header
