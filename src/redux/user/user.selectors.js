import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCurrentUser = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
