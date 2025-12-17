import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

const Splash = ({navigation}: any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Parent')
        }, 2000) 
    })
  return (
    <View>
      {/* splash Screen */}
      <Text>Splash Screen</Text>
    </View>
  )
}

export default Splash
