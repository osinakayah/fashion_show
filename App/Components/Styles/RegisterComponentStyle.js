import { StyleSheet } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
  },
  inputItemStyle: {
    marginBottom: Metrics.doubleBaseMargin,
    color: Colors.silver,
    borderColor: Colors.silver,
  },
  authForm: {

  },
  loginButton: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.primaryAccent,
  },
  whiteText: {
    color: Colors.silver,
  },
  textWithDivider: {
    color: Colors.silver,
    fontFamily: Fonts.type.base,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 12
  },
})
