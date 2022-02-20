import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from './screens/NewsScreen';
import DetailScreen from './screens/DetailScreen';
import WeatherScreen from './screens/WeatherScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ニュース" component={NewsScreen} />
      <Stack.Screen name="詳細ページ" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="天気予報" component={WeatherScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;

    if (route.name === 'ニュース') {
      iconName = 'newspaper-o';
    } else if (route.neme === '天気予報') {
      iconName = 'sun-o';
    }
    // return <Ionicons name={iconName} size={size} />;
  },
});

export default App = () => {
  return (
    <NavigationContainer screenOption={screenOption}>
      <Tab.Navigator>
        <Tab.Screen name="ニュース" component={NewsStack} />
        <Tab.Screen name="詳細ページ" component={WeatherStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
