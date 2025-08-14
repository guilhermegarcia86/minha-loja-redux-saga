import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure, type Product } from './productsSlice';

function fetchProductsApi() {
  return fetch('https://fakestoreapi.com/products').then(res => res.json());
}

function* fetchProducts() {
  try {
    const products: Product[] = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error instanceof Error ? error.message : String(error)));
  }
}

export default function* productsSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProducts);
}
