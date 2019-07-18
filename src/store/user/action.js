import { createAction } from "redux-actions";
import { UserCase } from "@gl/constants";

export const USER_UPDATE_STATE = createAction(UserCase.User.updateState);

// export const user_CHECK_AUTHORIZATION = createAction(UserCase.User.checkAuthorization);

// export const USER_LOGIN = ({ userName, password }) => (dispatch) => {
//   return dispatch(USER_UPDATE_STATE({ userName: userName, password: password }))
// };

// export const user_LOGOUT = createAction(UserCase.User.logout);
// export const user_SIGNUP = createAction(UserCase.User.signup);
// export const user_VERIFY_SIGNUP = createAction(UserCase.User.verifySignup);
// export const user_FORGET_PASSWORD = createAction(UserCase.User.forgetPassword);
// export const user_RESEND_VERIFICATION_CODE = createAction(UserCase.User.resendVerificationCode);


export const USER_GET_PROFILE = createAction(UserCase.User.getProfile);
export const USER_LOGIN = createAction(UserCase.User.login);
