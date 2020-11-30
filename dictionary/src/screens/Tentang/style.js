import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 30,
    height: Dimensions.get('screen').height,
    backgroundColor: '#f2f2f2',
  },
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  marginTop: {
    marginTop: 30,
  },
  devText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});
