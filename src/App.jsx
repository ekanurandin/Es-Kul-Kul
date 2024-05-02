import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Produk from './screens/Produk';
import Beranda from './screens/Beranda';
import Tentang from './screens/Tentang';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/FontAwesome6';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'brown'}}>
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tentang"
        component={Tentang}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <IconF name="user-alt" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Produk"
        component={Produk}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <IconA name="ice-cream" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MenuBawah}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
