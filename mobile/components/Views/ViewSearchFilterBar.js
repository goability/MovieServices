import React, {Component} from 'react';
import {AppRegistry,Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles/stylesDefault.js';

//const filterOptions = [ {id:1, title:'Top Rated'}, {id:2, title:'Popular'}];
const filterOptions = [ {id:1, txt:'TopRated'}, {id:2, txt:'Popular'}];
export default class ViewSearchFilterBar extends Component{


  constructor(props){
    super(props);
    this.state={
        filterSelected:1
      };
  }
  componentDidMount(){

  }
  onFilterSelected(filterId){
    this.setState({
      filterSelected:filterId
    })
  }
  render(){
    var filterSelectionsUI =

    filterOptions.map((val) => {
                return (
                    <View style={styles.filterBar}>
                      <TouchableOpacity key={val.id} onPress={this.onFilterSelected.bind(this, val.id)}>
                          <View style={styles.radioUnselected}>
                            {
                              val.id == this.state.filterSelected ?
                                <View style={styles.radioSelected}/>
                                : null
                            }
                          </View>
                      </TouchableOpacity>
                      <Text style={styles.filterBar}>{val.txt}</Text>
                    </View>
                )
              });
    return (
            <View style={styles.filterBar}>
            {filterSelectionsUI}
            </View>

        );
      }
}
AppRegistry.registerComponent('findamovie', () => ViewSearchFilterBar);
