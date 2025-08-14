import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  sendCartRequest,
  sendCartSuccess,
  sendCartFailure
} from './cartSlice';
import type { RootState } from '../../store';

export interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartApiPayload {
    userId: number;
    date: string;
    products: CartProduct[];
}

function sendCartApi(cart: CartApiPayload) {
  return fetch('https://fakestoreapi.com/carts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  }).then(res => res.json());
}

const selectCart = (state: RootState) => state.cart.items;

function* sendCart() {
  try {
    const items: CartProduct[] = yield select(selectCart);
    
    const cartData = {
      userId: 1, 
      date: new Date().toISOString().slice(0, 10),
      products: items.map((item: CartProduct) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
    yield call(sendCartApi, cartData);
    yield put(sendCartSuccess());
  } catch (error) {
    yield put(sendCartFailure(error instanceof Error ? error.message : String(error)));
  }
}

export default function* cartSaga() {
  yield takeLatest(sendCartRequest.type, sendCart);
}
