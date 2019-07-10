const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
    if(idx === -1) {
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, idx),
            item, 
            ...cartItems.slice(idx + 1)
        ]
    }
}
const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }
    switch(action.type) {
        case 'BOOK_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1)
        case 'BOOK_REMOVE_TO_CART':
        return updateOrder(state, action.payload, -1)
        case 'ALL_BOOKS_REMOVE_FROM_CART':
        const item  = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);
        default:
        return state.shoppingCart
    }
}

const updateOrder = (state, phoneId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state
    const phone = books.find(book => book.id === phoneId);
    const itemIndex = cartItems.findIndex(({id}) => id === phoneId)
    const item  = cartItems[itemIndex];
    const newItem = updateCartItem(phone, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    }
}

const updateCartItem = (phone, item = {}, quantity) => {

    const {id = phone.id, count = 0, name = phone.name, total = 0} = item;

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity * phone.price
    }
}

export {
    updateCartItems,
    updateShoppingCart,
    updateCartItem,
    updateOrder
}