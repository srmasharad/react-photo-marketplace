import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM_FROM_CART } from "./cart.types"
import { addItemToCart, decreaseItemFromCart } from "./cart.utils"

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case DECREASE_ITEM:
            return{
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, action.payload)
            }

        case REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }   
}

export default cartReducer