import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const senha = password;

    const response = yield call(api.post, 'login', {
      email,
      senha,
    });

    const { success, user } = response.data;

    if (!success) {
      Alert.alert('Login error', response.data.message);
      yield put(signInFailure());
      return;
    }

    yield put(signInSuccess(user));

  } catch (err) {
    Alert.alert(
      'Authtentication failure',
      'Logon falhou, tente novamente.');
    yield put(signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
