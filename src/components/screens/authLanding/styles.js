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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
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
    backgroundColor: '#0054AD',
    padding: 5,
    borderRadius: 10,
  },
  signup: {
    backgroundColor: '#4F00A3',
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 25,
  },
  buttonViewDimensions: {
    marginTop: 57,
    marginLeft: 5,
    marginRight: 5,
  },
})

export default styles
