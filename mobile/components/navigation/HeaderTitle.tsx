import React, { FC } from 'react'
import { Image } from 'react-native'

const HeaderTitle: FC = () => {
  return (
    <Image
      source={require('../../assets/images/logo.png')}
      resizeMode="cover"
      style={{ height: 50, width: 200, marginTop: -4 }}
    />
  )
}

export default HeaderTitle
