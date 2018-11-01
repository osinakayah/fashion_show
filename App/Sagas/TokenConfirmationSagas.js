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
import TokenConfirmationActions from '../Redux/TokenConfirmationRedux'
// import { TokenConfirmationSelectors } from '../Redux/TokenConfirmationRedux'

export function * getTokenConfirmation (api, action) {
  const { data } = action

  // get current data from Store
  // const currentData = yield select(TokenConfirmationSelectors.getData)
  // make the call to the api
  const response = yield call(api.verifyAccount, data)
  const message = response.data ? response.data.message : 'Oops, an error occurred';
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
  });
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(TokenConfirmationActions.tokenConfirmationSuccess(response.data))
  } else {
    yield put(TokenConfirmationActions.tokenConfirmationFailure())
  }
}
