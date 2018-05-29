import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  profile: {
    flex: 1,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 25,
  },
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
})

export default styles
