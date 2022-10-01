import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Pressable } from '../../components/building-blocks'
import Colors from '../../constants/Colors'

type HeaderProps = {
  onPressProfile: () => void
}

const Header: FC<HeaderProps> = ({ onPressProfile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text value="Taste Buddy" style={styles.tasteBuddyText} />
        <Pressable onPress={onPressProfile}>
          <Image source={require('../../assets/images/user-profile.png')} style={styles.image} />
        </Pressable>
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
  image: {
    height: 20,
    width: 20,
  },
})

export default Header
