import React, { FC } from 'react'
import { Image, StyleSheet } from 'react-native'
import Pressable from '../building-blocks/Pressable'

type ProfileButtonProps = {
  onPress: () => void
}

const ProfileButton: FC<ProfileButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={require('../../assets/images/user-profile.png')} style={styles.image} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
  },
})

export default ProfileButton
