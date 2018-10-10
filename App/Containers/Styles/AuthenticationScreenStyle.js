import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginTop: 0,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
  }
})
