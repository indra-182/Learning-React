import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// createSlice menggabungkan createAction dan createReducer
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("ON CREATE STORE : ", store.getState());

store.subscribe(() => console.log("ON CREATE STORE : ", store.getState()));

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));
