import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  emptySpacer: {
    height: 0,
  },
  filterBar: {
    fontSize: 20,
    flexDirection: 'row',
    margin: 2,
    backgroundColor: '#2196F3',
    borderRadius: 4
  },
  radioUnselected: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#000',
  },
  radioSelected: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchBar: {
    fontSize: 20,
    flexDirection: 'row',
    margin: 2,
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  searchBox: {
    fontSize: 20,
    margin: 1,
    width:'auto',
    backgroundColor: 'white',

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
