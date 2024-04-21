import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import SettingScreen from '../screens/SettingScreen';
import { Image } from 'react-native';
import { COLORS } from '../assets';
import { ICONS } from '../assets';
import { SCREENS } from '../assets';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationTab"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingTab"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false, 
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.HOME}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen 
        name="Location"
        component={LocationScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.LOCATION}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: false,
          tabBarItemStyle: {
            marginBottom: 5,
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.PROFILE}
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? COLORS.ORANGE : COLORS.BLACK,
              }}
            />
          ),
          tabBarStyle: {
            height: 50,
          },
          tabBarActiveTintColor: COLORS.ORANGE,
          tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;