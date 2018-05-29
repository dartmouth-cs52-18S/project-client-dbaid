import { createStackNavigator } from 'react-navigation'
import AuthLanding from '../components/screens/authLanding/authLanding'
import SignUp from '../components/screens/signup/signup'
import SignIn from '../components/screens/signin/signin'


// nest stack navigator to handle two internal views
const AuthStackNavigator = createStackNavigator(
  {
  // keys are the names of the "routes"
    AuthLanding,
    SignUp,
    SignIn,
  },
  { headerMode: 'screen' },
)


export default AuthStackNavigator
