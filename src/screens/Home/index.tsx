import React from 'react'
import { Text, View } from 'react-native'
import DrawerNavigator from '../../navigation/drawer/DrawerNavigator'
import BottomNavigator from '../../navigation/BottomNavigator';

const Home = () => {
  return (
    <View style={{flex:1}}>
      <BottomNavigator />
      {/* <DrawerNavigator /> */}
    </View> 
  )
}

export default Home
