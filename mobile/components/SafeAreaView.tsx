import React, { FC, PropsWithChildren } from 'react'
import { ViewProps, StyleSheet } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import Colors from '../constants/Colors'

type SafeAreaViewProps = { withNavHeader?: boolean } & ViewProps

const SafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({ withNavHeader = true, children, ...props }) => {
  return (
    <RNSafeAreaView {...props} style={[styles.view, props.style, { marginTop: withNavHeader ? -20 : 0 }]}>
      {children}
    </RNSafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: Colors.white },
})

export default SafeAreaView
