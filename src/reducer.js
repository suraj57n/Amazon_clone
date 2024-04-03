import { Switch } from "@mui/base";

export const initialState = {
    basket: [
    ],
    user:null
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic to add item to the basket
            return {
               ...state,
               basket:[...state.basket,action.item]
            };
            case 'REMOVE_FROM_BASKET':
                // Logic to remove item from the basket
                const idx = state.basket.findIndex((basketItem) => basketItem.id === action.id);
                if (idx >= 0) {
                    const newBasket = [...state.basket];
                    newBasket.splice(idx, 1);
                    return {
                        ...state,
                        basket: newBasket // Update basket in the state
                    };
                } else {
                    console.warn(`Can't remove item with id ${action.id}`);
                    return state; // Return the original state if item not found
                }
        default:
            return state;
    }
}

export default reducer;
