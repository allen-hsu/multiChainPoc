import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from './HomeScreen';
import SendTransactionScreen from './SendTransactionScreen';
// import AddAccountScreen from './AddAccountScreen';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tx" component={SendTransactionScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
