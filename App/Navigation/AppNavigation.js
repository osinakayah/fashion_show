import { StackNavigator, SwitchNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import AuthenticationScreen from '../Containers/AuthenticationScreen'
import LaunchScreen from '../Containers/LaunchScreen';
import styles from './Styles/NavigationStyles'

const AppStack = StackNavigator({ HomeScreen: HomeScreen }, {headerMode: 'none'});
const AuthStack = StackNavigator({ AuthenticationScreen: AuthenticationScreen }, {headerMode: 'none'});

// Manifest of possible screens
const PrimaryNav = SwitchNavigator({
  LaunchScreen: { screen: LaunchScreen },
  AppStack: AppStack,
  AuthStack: AuthStack
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
