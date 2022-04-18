let initStore = {
    poductList: [],
    currentProduct: {}
}

export const productReducer = (state = initStore, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'UPDATE_PRODUCT_LIST':
            return { ...state, poductList: action.payload };
        default:
            return state;
    }
}