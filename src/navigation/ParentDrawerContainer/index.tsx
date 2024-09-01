import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';
import { View } from 'react-native';

const ParentDrawerContainer = () => {
    return (
        <View style={{flex:1}}>
          <DrawerNavigator />
        </View> 
      )
}

export default ParentDrawerContainer
