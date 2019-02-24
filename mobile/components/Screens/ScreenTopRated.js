import React, {Component} from 'react';
import {FlatList, Alert, AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import SearchFilterOption from './SearchFilterOption';
import styles from '../../styles/stylesDefault.js';

const subTitle = Platform.select({
  ios: 'Here are the top rated movies.\n',
  android:
    'Here are the top rated movies.',
});
  const title = 'Top Rated';
export default class ScreenTopRated extends React.Component {

  constructor(props){
    super(props);
    this.state = {Loading : true};
  }

  static navigationOptions = {
    title: 'Top Rated Movies',
  };
  componentDidMount(){
      return fetch('http://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&api_key=')
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
            renderItem={({item}) => <Text>{item.title}, {item.vote_count}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
  }
}

AppRegistry.registerComponent('findamovie', () => ScreenTopRated);
