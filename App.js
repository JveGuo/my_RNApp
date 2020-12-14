

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from "./app/pages/WelcomePage";
import HomePage from "./app/pages/HomePage";
import TabNav from "./app/navigator/TabNav";
import ChangeRouteParams from "./app/pages/ChangeRouteParams";

const Stack = createStackNavigator();


const AppIndex = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          // headerMode={null}
          initialRouteName='WelcomePage'
          // screenOptions={{                 //用来定制头部信息、根据自己需要更改
          //   // title: null,
          //   // headerStyle: {
          //   //   backgroundColor: '#ee7530'
          //   // },
          //   // headerTintColor: '#fff',
          //   // headerTitleStyle: {
          //   //   fontWeight: 'bold',
          //   //   fontSize: 20
          //   // }
          // }}
        >
          <Stack.Screen options={{
            headerShown: false
          }} headerShown={false} name="WelcomePage" component={WelcomePage} />

          <Stack.Screen options={{title: '首页', headerShown: false}} name="HomePage" component={TabNav} />

          {/*<Stack.Screen options={{*/}
          {/*  // headerTitle: "测试",*/}
          {/*  title: 'test'*/}
          {/*}} name="ChangeRouteParamsPage" component={ChangeRouteParams} />*/}

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppIndex;
