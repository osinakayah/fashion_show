import { takeLatest, all, select } from 'redux-saga/effects'
import DesignsAPI from '../Services/Api'
import AuthApi from '../Services/AuthApi'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

// import { StartupTypes } from '../Redux/StartupRedux'
// import { GithubTypes } from '../Redux/GithubRedux'
import { RegisterTypes } from '../Redux/RegisterRedux';
import { LoginTypes } from "../Redux/LoginRedux";
import { TokenConfirmationTypes } from "../Redux/TokenConfirmationRedux";
import { DesignTypes } from "../Redux/DesignRedux";

/* ------------- Sagas ------------- */

// import { startup } from './StartupSagas'
// import { getUserAvatar } from './GithubSagas'
import { getRegister } from "./RegisterSagas";
import { getLogin } from "./LoginSagas";
import { getTokenConfirmation } from "./TokenConfirmationSagas";
import { getDesigns, getAuthDesigns } from "./DesignSagas";
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

const designsApi = DesignsAPI.create()
const authApi = AuthApi.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, getRegister, authApi),
    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, authApi),
    takeLatest(TokenConfirmationTypes.TOKEN_CONFIRMATION_REQUEST, getTokenConfirmation, authApi),
    takeLatest(DesignTypes.DESIGN_GET, getAuthDesigns, designsApi),
    takeLatest(DesignTypes.DESIGN_GET_UN_AUTH, getDesigns, authApi),
  ])
}
