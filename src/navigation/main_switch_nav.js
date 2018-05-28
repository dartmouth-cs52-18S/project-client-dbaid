import { createSwitchNavigator } from 'react-navigation'
import AuthNavigator from './auth_stack_nav'
import MainAppNavigator from './main_tab_nav'
import AuthLoadingScreen from '../components/screens/authAwait/authAwait'


const MainNav = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  AuthFlow: AuthNavigator,
  AppFlow: MainAppNavigator,
})


export default MainNav
