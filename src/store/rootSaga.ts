import { all } from 'redux-saga/effects';
import authSaga from '../features/auth/authSaga';
import productsSaga from '../features/products/productsSaga';
import cartSaga from '../features/cart/cartSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    productsSaga(),
    cartSaga(),
  ]);
}
