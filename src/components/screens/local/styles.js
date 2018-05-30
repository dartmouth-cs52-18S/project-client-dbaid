import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',

  },
  entry: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  entries: {
    width: '25%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    height: 200,
  },
  welcome: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 10,
  },
})

export default styles
