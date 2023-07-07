import { View, Text, Image } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../src/screens/HomeScreen";

type Props = {}

const Tab = createBottomTabNavigator();

const Tabs = (props: Props) => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
    }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
               {/* Home Icon will be here */}
              <Text style={{color: focused ? 'crimson' : 'black'}}>Home</Text>
            </View>
          ),
        })}
      />
  </Tab.Navigator>
  )
}

export default Tabs