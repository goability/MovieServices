import React, {Component} from 'react';
import {Alert, Image, FlatList, AppRegistry, Picker, Platform, StyleSheet, TouchableHighlight, Text, TextInput, View} from 'react-native';
import SearchFilterOption from './SearchFilterOption';
import ViewSearchFilterBar from '../Views/ViewSearchFilterBar';
import ViewSearchBar from '../Views/ViewSearchBar';
import styles from '../../styles/stylesDefault.js';

const subTitle = Platform.select({
  ios: '\n',
  android:
    '',
});
const title = 'Now Playing';

export default class ScreenNowPlaying extends React.Component {

  constructor(props){
    super(props);

    currentDate= new Date();
    this.currentYear = currentDate.getFullYear();

    this.state = {Loading : true, SearchFilter:'TopRated'};
    this.onSearchTextEntered = this.onSearchTextEntered.bind(this);
    //this.servicePath = '/discover/movie';
    this.servicePath = '/search/movie';
    //https://api.themoviedb.org/3/search/movie
    this.urlQueryParameters = 'sort_by=title.desc&query=Airplane';

    this.screenTitle = 'Now Playing ' + this.currentYear;
  }

  static navigationOptions = {
    title: 'Now Playing',
  };

  fetchData(){
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){
            //Grab the images, and store in new object collection that is easier to navigate
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidMount(){

    url=global.configTMDB.BuildURLWithParameters(this.servicePath, this.urlQueryParameters);

    return this.fetchData();

    }
    onMovieTouch(){
      //Alert.alert('Touched');
    }
    onSearchTextEntered(e){
      //update the query,
      Alert.alert('Entered search text:' + e);
    }
    renderMovieRow(movieId, movieTitle, imgPath){

      var imgURL = global.configTMDB.getImageBaseURL('w300', 'backdrop_sizes') + imgPath;

      if (imgPath==null){
        return(
          <Text style={styles.emptySpacer}></Text>
          //<Image source={{uri: {imgURL}}} style={{width: 400, height: 400}} />
        )
      }
      else{
        return(
          <View style={{flex: 1, padding: 4}}>
            <Text style={styles.title}>{movieTitle}</Text>
            <TouchableHighlight onPress={this.onMovieTouch()}>
              <Image source={{uri: imgURL}} style={{height:300, width:300, borderWidth:20}} />
            </TouchableHighlight>
          </View>
        )
      }
    //  <Image source={{uri: this.getMovieImageURL(item.poster_path)}} style={{width: 400, height: 400}} />
    }

  render() {
    const {navigate} = this.props.navigation;
    var murl = "http://image.tmdb.org/t/p/w154/1T1DXWwvW2XZTF1yOuhDS9PQ9I.jpg";

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 4}}>
            <ActivityIndicator/>
          </View>
        )
      }

      return(
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems:'flex-start',}}>
          <ViewSearchBar onChange={this.onSearchTextEntered} />
          <ViewSearchFilterBar />


          <View style={styles.container} >
            <Text style={styles.title}>{this.screenTitle}</Text>
            <Text style={styles.instructions}>{subTitle}</Text>
            <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => this.renderMovieRow(item.id, item.title, item.poster_path)}
              keyExtractor={({id}, index) => id}
            />
          </View>
        </View>
      );
  }
}


//<Text style={styles.title}>{global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}</Text>
//{global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}
//{global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}
//<Image source={{uri: {item}.poster_path}} style={{width: 400, height: 400}} />
//<Text style={styles.title}>{global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}</Text>
//<Image source="{{uri:  global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}}"/>
////<Text style={styles.title}>{global.configTMDB.getImageBaseURL('w154', 'poster_sizes')}{item.poster_path}</Text>
AppRegistry.registerComponent('findamovie', () => ScreenNowPlaying);
