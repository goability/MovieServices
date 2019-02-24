/**
 * Find a movie App
 *
 */
/*
*/

import React from "react";
import { Alert, AppRegistry, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


import ConfigTMDB from './components/ConfigTMDB.js';
global.configTMDB = ConfigTMDB;
//----- Screens -----
//todo - collection of screens from drop-in or auto-discovery
import ScreenMain from './components/Screens/ScreenMain';
import ScreenNowPlaying from './components/Screens/ScreenNowPlaying';
import ScreenTopRated from './components/Screens/ScreenTopRated';
//import ScreenPopular from './components/Screens/ScreenPopular';
import ScreenAllMovies from './components/Screens/ScreenAllMovies';

var defaultTMDBConfigData = require('./tmdb.json');



global.configTMDB.LoadConfig(defaultTMDBConfigData);

//global.configTMDB = ConfigTMDB;
//Alert.alert(global.configTMDB.images['base_url']);

//This is how the different screens are navigated
const AppNavigator = createStackNavigator({
  Home: {
    screen: ScreenMain
  },
  NowPlaying: {
    screen: ScreenNowPlaying},
  TopRated: {
    screen: ScreenTopRated},
  AllMovies: {
    screen: ScreenAllMovies}
});

//function getConfiguration()=>{}

AppRegistry.registerComponent('findamovie', () => AppNavigator);
export default createAppContainer(AppNavigator);
