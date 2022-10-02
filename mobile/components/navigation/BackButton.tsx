import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import Pressable from '../building-blocks/Pressable'

type BackButtonProps = {
  onPress: () => void
}

const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={require('../../assets/images/back-button.png')} style={styles.image} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 22,
    width: 22,
  },
})

export default BackButton
