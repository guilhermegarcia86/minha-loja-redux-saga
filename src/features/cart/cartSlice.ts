import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct } from './cartSaga';


interface CartState {
  items: CartProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ productId: number }>) {
      const found = state.items.find(i => i.productId === action.payload.productId);
      if (found) {
        found.quantity += 1;
      } else {
        state.items.push({ productId: action.payload.productId, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<{ productId: number }>) {
      state.items = state.items.filter(i => i.productId !== action.payload.productId);
    },
    clearCart(state) {
      state.items = [];
    },
    sendCartRequest(state) {
      state.loading = true;
      state.error = null;
    },
    sendCartSuccess(state) {
      state.loading = false;
      state.items = [];
    },
    sendCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  sendCartRequest,
  sendCartSuccess,
  sendCartFailure
} = cartSlice.actions;

export default cartSlice.reducer;
