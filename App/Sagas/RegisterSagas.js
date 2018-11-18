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
import {NavigationActions} from "react-navigation";
import RegisterActions from '../Redux/RegisterRedux'
// import { RegisterSelectors } from '../Redux/RegisterRedux'

export function * getRegister (api, action) {

  const { data } = action
  // get current data from Store
  // const currentData = yield select(RegisterSelectors.getData)
  // make the call to the api
  const response = yield call(api.registerUser, data)
  console.log(response)
  const message = response.data ? response.data.data.message : 'Oops, an error occurred';
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
  });
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    if (response.data && response.data.data) {
      yield put(NavigationActions.navigate({ routeName: 'AccountVerificationScreen', params: {token: response.data.data.token.toString()} }));
    }
    yield put(RegisterActions.registerSuccess(response.data ? response.data.data : {}))
  } else {
    yield put(RegisterActions.registerFailure(response.data ? response.data.data : {}))
  }
}
