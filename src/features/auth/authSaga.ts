import { call, put, takeLatest } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from './authSlice';

interface LoginPayload {
  username: string;
  password: string;
}

function postLoginApi(payload: LoginPayload) {
  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(res => {
    if (!res.ok) throw new Error('Usuário ou senha inválidos');
    return res.json();
  });
}

function* login(action: { type: string; payload: LoginPayload }) {
  try {
    const response: { token: string } = yield call(postLoginApi, action.payload);
    yield put(loginSuccess({ token: response.token, username: action.payload.username }));
  } catch (error) {
    yield put(loginFailure(error instanceof Error ? error.message : String(error)));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, login);
}
