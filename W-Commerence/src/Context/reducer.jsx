const reducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        // add to cart1 go to addtocart.jsx
        case "ADD-TO_CART":
            const isExisted= state.cart.find(item => item.id === action.payload.id)
            if (isExisted) {
                return state;
            }else{
                return { ...state, cart: [...state.cart, action.payload] };
            }

            // remove from cart1 go to carditem.jsx
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
            // clear cart1 and go to add to card.jsx
            case "CART_EMPTY":
                return{...state,cart: (state.cart = [])}

        default:
            return state
    }
}

export default reducer;