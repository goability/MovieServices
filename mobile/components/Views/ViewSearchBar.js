import React, {Component} from 'react';
import {Alert, AppRegistry,Text, TextInput, View} from 'react-native';
import styles from '../../styles/stylesDefault.js';

export default class ViewSearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {text : ''};
    this.submitSearchText = this.submitSearchText.bind(this);
  }
  componentDidMount(){

  }
  submitSearchText(e){
    this.props.onChange(this.state.text);
  }
  render(){
    return(
      <View style={styles.searchBar}>
        <Text style={styles.searchBar}>Search</Text>
        <TextInput
          style={styles.searchBox}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.submitSearchText}
          value={this.state.text}
          autoFocus={true}
          placeholder="Search by Title"
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('findamovie', () => ViewSearchBar);
