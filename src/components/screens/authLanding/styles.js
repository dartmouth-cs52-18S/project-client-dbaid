import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#219653',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    flex: 3,
  },
  carousel: {
    flex: 3,
    // height: '50%',
    // width: '80%',
  },
  carouselImage: {
    flex: 3,
    height: undefined,
    width: undefined,
  },
  signin: {
    borderRadius: 10,
    width: '40%',
    backgroundColor: '#1CA3A2',
    padding: '10px',
  },
  signup: {
    borderRadius: 10,
    width: '40%',
    backgroundColor: '#1DAD83',
    padding: '10px',
  },
})

export default styles