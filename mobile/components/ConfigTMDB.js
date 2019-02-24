/*
  Configuration for themoviedb.org connections
*/
/*
function ConfigTMDBImage(jsonStr){

  var jsonOBJ = JSON.parse(jsonStr);

  this.base_url: jsonOBJ.base_url,
  this.secure_base_url: jsonOBJ.secure_base_url,
  this.backdrop_sizes: jsonOBJ.backdrop_sizes,
  this.logo_sizes: jsonOBJ.logo_sizes,
  this.poster_sizes: jsonOBJ.poster_sizes,
  this.profile_sizes: jsonOBJ.profile_sizes,
  this.still_sizes: jsonOBJ.still_sizes,
}
*/
import {AppRegistry, Alert} from 'react-native';

export default class ConfigTMDB{

  static base_url = "https://api.themoviedb.org/3";
  static secure_base_url = "https://api.themoviedb.org/3";
  static api_key = "";
  static images = {};
  static change_keys = {};

  constructor(){
    //Going to keep all at static level
  }
  static LoadConfig(jsonObj){

    ConfigTMDB.api_key = jsonObj['api_key'];
    ConfigTMDB.base_url = jsonObj['base_url'];
    ConfigTMDB.secure_base_url = jsonObj['secure_base_url'];
    ConfigTMDB.images = jsonObj['images'];
    ConfigTMDB.change_keys = jsonObj['change_keys'];
  }
  static getAPIBaseURL(){
    return base_url;
    }
  static getImageBaseURL(imgSizeTag, imgType){
    return ConfigTMDB.images['base_url'] + imgSizeTag;
  }
  static BuildURLWithParameters(servicePath, inputParams){
    return ConfigTMDB.base_url + servicePath + '?' + inputParams + '&api_key=' + ConfigTMDB.api_key;

  }
}
AppRegistry.registerComponent('findamovie', () => ConfigTMDB);
