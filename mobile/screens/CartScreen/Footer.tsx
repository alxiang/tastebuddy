import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../components/building-blocks'
import Colors from '../../constants/Colors'

type FooterProps = {
  onClearCart: () => void
  onSubmitOrder: () => void
}

const Footer: FC<FooterProps> = ({ onClearCart, onSubmitOrder }) => {
  return (
    <View style={styles.container}>
      <Button title="Clear cart" onPress={onClearCart} />
      <Button title="Submit order" onPress={onSubmitOrder} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: Colors.brown,
  },
})

export default Footer
