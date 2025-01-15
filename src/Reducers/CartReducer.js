const initialState = {
    cartData: [],
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartData: [...state.cartData, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter(item => item.id !== action.payload.id)
            }
    }
}

export { cartReducer, initialState }
