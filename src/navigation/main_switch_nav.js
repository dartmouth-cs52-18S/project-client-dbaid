import { createSwitchNavigator } from 'react-navigation'
import AuthNavigator from './auth_stack_nav'
import MainAppNavigator from './main_tab_nav'


const MainNav = createSwitchNavigator({
  AuthFlow: AuthNavigator,
  AppFlow: MainAppNavigator,
})


export default MainNav
