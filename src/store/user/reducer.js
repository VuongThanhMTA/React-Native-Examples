import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { UserCase } from "@gl/constants";
import { call, takeLatest, put, select } from 'redux-saga/effects';
import { USER_UPDATE_STATE } from './action'



const userLogin = function* ({ payload: { userName, password } }) {

  const email = 'thanh.vuong@sotatek.com';

  yield put(USER_UPDATE_STATE({
    userName: userName,
    password: password,
    email: email
  }));
};


export const userSaga = function* () {
  yield takeLatest(UserCase.User.login, userLogin);
};

const defaultState = {
  userName: 'Thanh-Sotatek',
  password: '',
  email: '',
};

// export default reducer = handleActions({
//   USER_UPDATE_STATE: (state, { payload }) =>
//     fromJS(state)
//       .mergeDeep(payload)
//       .toJS()
// }, defaultState);

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'USER_UPDATE_STATE':
      return fromJS(state).mergeDeep(action.payload).toJS();
    default:
      return defaultState;
  }
};
