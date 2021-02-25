import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM_FROM_CART } from "./cart.types";

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})

export const decreaseItem = item => ({
    type: DECREASE_ITEM,
    payload: item
})