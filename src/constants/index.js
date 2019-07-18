export const UserCase = Object.freeze({
  User: {
    updateState: 'USER_UPDATE_STATE',

    checkAuthorization: 'USER_CHECK_AUTHORIZATION',
    login: 'USER_LOGIN',
    logout: 'USER_LOGOUT',
    signup: 'USER_SIGNUP',
    forgetPassword: 'USER_FORGET_PASSWORD',
    verifySignup: 'USER_VERIFY_SIGNUP',
    resendVerificationCode: 'USER_RESEND_VERIFICATION_CODE',
    getProfile: 'USER_GET_PROFILE',
  }
})