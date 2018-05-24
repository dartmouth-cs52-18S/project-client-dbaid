import { createStackNavigator } from 'react-navigation'
import authLanding from '../components/screens/authLanding/authLanding'


// nest stack navigator to handle two internal views
const AuthStackNavigator = createStackNavigator({
  // keys are the names of the "routes"
  authLanding,
})


export default AuthStackNavigator
