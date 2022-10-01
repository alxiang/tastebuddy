import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../components/building-blocks'

type FooterProps = {
  onPressCart: () => void
  onPressGetCheck: () => void
}

const Footer: FC<FooterProps> = ({ onPressCart, onPressGetCheck }) => {
  return (
    <View style={styles.container}>
      <Button title="View your cart" onPress={onPressCart} />
      <Button title="Get the check" onPress={onPressGetCheck} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default Footer
