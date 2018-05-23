import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  amount: {
    flex: 1,
    marginTop: 30,
  },
  root: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  numberInput: {
    flex: 1,
    alignItems: 'center',
  },
  under: {
    flex: 2,
    fontSize: 20,
    margin: 20,
  },
  image: {
    width: 170,
    height: 170,
  },
  profile: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
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
})

export default styles
