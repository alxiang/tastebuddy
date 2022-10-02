import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../../components/building-blocks'

type CartItemProps = {
  name: string
  specialRequests: string
  price: number
}

const CartItem: FC<CartItemProps> = ({ name, specialRequests, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text value={name} style={styles.name} />
        {specialRequests && <Text value={specialRequests} style={styles.specialRequests} />}
      </View>
      <Text value={`$${price / 100}`} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
  specialRequests: {
    fontSize: 12,
  },
})

export default CartItem
