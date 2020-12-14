
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from "../pages/HomePage";
import ChangeRouteParams from "../pages/ChangeRouteParams";
import AntDesign from 'react-native-vector-icons/AntDesign';

import {createStackNavigator} from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

const TabStack = createStackNavigator();


function ChangePage() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="School"
        component={ChangeRouteParams}
        options={{
          headerTitle: '我是设置标题',
          headerLeft: null,
          headerTitleAlign: 'center',
        }}
      />
    </TabStack.Navigator>
  );
}


export default function TabNav() {
  return(
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === 'Settings') {
            return <AntDesign name="cloudo" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{title: '首页', headerMode: 'none'}} />
      <Tab.Screen name="Settings" component={ChangePage} options={{title: '修改'}} />
    </Tab.Navigator>
  )
}