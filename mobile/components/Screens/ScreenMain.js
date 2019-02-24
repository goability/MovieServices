import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import SearchFilterOption from './SearchFilterOption';
import styles from '../../styles/stylesDefault.js';

const subTitle = Platform.select({
  ios: 'It\'s time to find something good to watch!\n',
  android:
    'It\'s time to find something good to watch!',
});
const title = 'Let\'s find a movie';

export default class ScreenMain extends React.Component {
  static navigationOptions = {
    title: 'Find A Movie',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.instructions}>{subTitle}</Text>
        <SearchFilterOption text='Now Playing' screenName='NowPlaying' navigation={this.props.navigation}/>
        <SearchFilterOption text='Popular' screenName='Popular' navigation={this.props.navigation}/>
        <SearchFilterOption text='Top Rated' screenName='TopRated' navigation={this.props.navigation}/>
        <SearchFilterOption text='All Movies' screenName='AllMovies' navigation={this.props.navigation}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('findamovie', () => ScreenMain);
