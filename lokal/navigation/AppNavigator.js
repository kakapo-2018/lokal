import React from 'react';
import { Platform, } from 'react-native';
import { createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import IwiJourneyScreen from '../screens/IwiJourneyScreen';
import ARScreen from '../screens/ARScreen';


export default AppNavigator = createStackNavigator({
  Journey: { screen: IwiJourneyScreen},
  Home: { screen: HomeScreen},
  AR: { screen: ARScreen},
}, {
  initialRouteName: 'AR',
});