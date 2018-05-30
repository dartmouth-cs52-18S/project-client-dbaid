import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',

  },
  entry: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  entries: {
    width: '33%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  flatlist: {
    height: 200,
  },
})

export default styles
