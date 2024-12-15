import { IProduct } from '@/interface/product.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartProduct extends IProduct {
  quantity: number;
}

export type TCartState = {
  products: ICartProduct[];
  quantity: number;
  total: number;
};

const initialState: TCartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const productQuantity = product.quantity ?? 1;

      const existingProduct = state.products.find(
        (item) => item._id === product._id,
      );

      if (existingProduct) {
        existingProduct.quantity += productQuantity;
      } else {
        state.products.push({ ...product, quantity: productQuantity });
      }

      state.quantity += productQuantity;
      state.total += (product.price ?? 0) * productQuantity;
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload,
      );

      if (product) {
        product.quantity = (product.quantity ?? 1) + 1;
        state.total += product.price ?? 0;
        state.quantity += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload,
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price ?? 0;
        state.quantity -= 1;
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const product = state.products.find(
        (item) => item._id === action.payload,
      );

      if (product) {
        const productQuantity = product.quantity ?? 1;
        state.quantity -= productQuantity;
        state.total -= (product.price ?? 0) * productQuantity;

        state.products = state.products.filter(
          (item) => item._id !== action.payload,
        );
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
