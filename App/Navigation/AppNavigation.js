import { StackNavigator, SwitchNavigator } from 'react-navigation'
import AccountVerificationScreen from '../Containers/AccountVerificationScreen'
import UserAccountScreen from '../Containers/UserAccountScreen'
import FavoritesScreen from '../Containers/FavoritesScreen'
import HomeScreen from '../Containers/HomeScreen'
import AuthenticationScreen from '../Containers/AuthenticationScreen'
import LaunchScreen from '../Containers/LaunchScreen';
import styles from './Styles/NavigationStyles'

const AppStack = StackNavigator({ HomeScreen, UserAccountScreen, FavoritesScreen }, {headerMode: 'none'});
const AuthStack = StackNavigator({ HomeScreen, AuthenticationScreen, AccountVerificationScreen }, {headerMode: 'none'});

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
