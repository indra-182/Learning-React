import { createStore } from "redux";

const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 10,
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(cartReducer);
console.log("On create store : ", store.getState());

store.subscribe(() => console.log("STORE CHANGE", store.getState()));
store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 10,
  },
});
