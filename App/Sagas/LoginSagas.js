/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/
import Snackbar from 'react-native-snackbar';
import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import { AsyncStorage } from 'react-native'
import Config from "../Config/AppConfig";
import {NavigationActions} from "react-navigation";
import UserAccountScreen from "../Containers/UserAccountScreen";
import HomeScreen from "../Containers/HomeScreen";
// import { LoginSelectors } from '../Redux/LoginRedux'

export function * getLogin (api, action) {
  const { data } = action

  // get current data from Store
  // const currentData = yield select(LoginSelectors.getData)
  // make the call to the api
  const response = yield call(api.loginUser, data)
  const message = response.data ? response.data.data.message : 'Oops, an error occurred';
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
  });

  // success?
  if (response.ok) {
    if (response.data && response.data.data && response.data.data.token) {
      AsyncStorage.setItem(Config.JWT_TOKEN_KEY, response.data.data.token);
      yield put(NavigationActions.navigate({ routeName: 'AppStack' }));
    }

    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(LoginActions.loginSuccess(response.data.data.token))
  } else {
    yield put(LoginActions.loginFailure())
  }
}
