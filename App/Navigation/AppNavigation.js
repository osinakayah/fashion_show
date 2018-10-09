import { StackNavigator } from 'react-navigation'
import AuthenticationScreen from '../Containers/AuthenticationScreen'
import LaunchScreen from '../Containers/LaunchScreen';
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AuthenticationScreen: { screen: AuthenticationScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
