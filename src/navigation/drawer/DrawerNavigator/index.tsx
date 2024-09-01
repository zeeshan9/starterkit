import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../../../screens/Profile';
import Settings from '../../../screens/Settings';
import CustomDrawer from '../CustomDrawer'
import MainBottomNavigation from '../Main'
// call this drawer navigator to parent(HomeComponent)
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // 
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen 
          name="Main" 
          component={MainBottomNavigation}
          options={{ headerShown: true }}    
      />
      {/* since we are using bottom navigation in main, we need to add custom drawer otherwise we need to add
        Bottom Navigator in all the screen like list below. */}
      {/* <Drawer.Screen 
          name="Profile" 
          component={Profile}
          options={{ headerShown: true }}    
      /> 
      <Drawer.Screen 
          name="Settings" 
          component={Settings}
      /> */}
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
