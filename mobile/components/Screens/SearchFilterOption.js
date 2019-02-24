import React from 'react';
import {Alert, AppRegistry, StyleSheet, Text, TouchableHighlight, TouchableOpacity,
        TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';
import {withNavigation, createStackNavigator, createAppNavigator} from 'react-navigation';

export default class SearchFilterOption extends React.Component{

  constructor(props){
    super(props);

  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render(){
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate(this.props.screenName); }} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </View>
      </TouchableHighlight>
    );
  }
}
//todo move this to styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius:20,
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

AppRegistry.registerComponent('findamovie', () => SearchFilterOption);
