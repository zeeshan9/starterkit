import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Splash from '../screens/Splash';
import ParentDrawerContainer from './ParentDrawerContainer'
/* 
  Creation method step by step 
  - 1st createStackNavigator
  - 2nd createDrawerNavigator
  - 3rdcreateBottomTabNavigator

  NavigationContainer should always be at the top and it will be only define once at root of all other navigation. 
  All navigation will be inside it.
*/

const Stack = createNativeStackNavigator();
// Route navigation
const AppNavigator = () => {
  // Everthing happens inside this NavigationContainer & its called only here at top only once.
  return (
    <NavigationContainer> 
      <Stack.Navigator > 
        {/* 
          initialRouteName='Parent' 
        */}
        <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false
            }}
        /> 
        <Stack.Screen
            name="Parent"
            component={ParentDrawerContainer}
            options={{
              headerShown: false
            }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
