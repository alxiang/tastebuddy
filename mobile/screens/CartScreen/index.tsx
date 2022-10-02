import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import tasteBuddy from '../../api/tasteBuddyApi'
import { Button, Text } from '../../components/building-blocks'
import SafeAreaView from '../../components/SafeAreaView'
import CartContext from '../../context/CartContext'
import UserContext from '../../context/UserContext'
import OrderContext from '../../context/OrderContext'
import { LoggedInStackParamList } from '../../navigation/NavigationTypes'
import CartItem from './CartItem'
import Footer from './Footer'

const CartScreen: FC<StackScreenProps<LoggedInStackParamList>> = () => {
  const { user } = useContext(UserContext)
  const { cart, clearCart, setCart } = useContext(CartContext)
  const { setOrderId } = useContext(OrderContext)

  // TODO: remove hard coded values
  const submitOrder = async () => {
    const order = {
      user_id: 'e5f2c6e7-8699-4914-99fc-74348ff65fbc', //user.id,
      restaurant_id: 'd4912fe9-2aaf-42bb-90a4-b9e443206ef5',
      food_id_to_special_request: {
        'fafbf0ba-8629-4869-baad-f2bca39c7619': 'Customer wants to trip balls',
        'f97b04a6-f527-4343-aaa2-add06f861e7a': '',
      },
    }

    tasteBuddy
      .post('orders/', JSON.stringify(order))
      .then((res) => {
        setOrderId(res.data.id)
        return res
      })
      .catch(() => null)
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {cart.items.length === 0 ? <Text value="Your cart is empty!" style={styles.emptyText} /> : null}
        <FlatList data={cart.items} renderItem={({ item }) => <CartItem {...item} />} />
      </View>
      <Footer onClearCart={() => clearCart()} onSubmitOrder={submitOrder} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  emptyText: {
    fontSize: 16,
  },
})

export default CartScreen
