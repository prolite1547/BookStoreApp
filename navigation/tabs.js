import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../constants';

// Screens
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMethod="auto"
                  style={{
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMethod="auto"
                  style={{
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMethod="auto"
                  style={{
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMethod="auto"
                  style={{
                    tintColor: tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
