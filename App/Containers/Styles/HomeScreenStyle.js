import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  homeImage: {
    // height: hp('50%'), // 70% of height device screen
    // width: wp('100%')
  }
})
