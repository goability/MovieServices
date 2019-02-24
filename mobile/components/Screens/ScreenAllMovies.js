import React, {Component} from 'react';
import {FlatList, Alert, AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import SearchFilterOption from './SearchFilterOption';
import styles from '../../styles/stylesDefault.js';

const subTitle = Platform.select({
  ios: 'List of all movies.\n',
  android:
    'List of all movies.',
});
const title = 'All Movies';

export default class ScreenAllMovies extends React.Component {

  constructor(props){
    super(props);
    this.state = {Loading : true};
  }

  static navigationOptions = {
    title: 'All',
  };
  componentDidMount(){
      return fetch('http://api.themoviedb.org/3/discover/movie?certification_country=US&sort_by=title.asc&api_key=')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.results,
          }, function(){

          });
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  render() {
    const {navigate} = this.props.navigation;

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.instructions}>{subTitle}</Text>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title} - {item.release_date}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
  }
}

AppRegistry.registerComponent('findamovie', () => ScreenAllMovies);
