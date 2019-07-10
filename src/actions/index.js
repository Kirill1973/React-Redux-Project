const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}


const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemoveFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_TO_CART',
        payload: bookId
    }
}

const allBooksAddedToCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVE_FROM_CART',
        payload: bookId
    }
}

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAITURE',
        payload: error
    }
}

const  fetchBooks = (bookStoreService, dispatch) => () => {
    dispatch(booksRequested())
    bookStoreService.getBooks()
    .then((data) => {
        dispatch(booksLoaded(data));
    })
    .catch((error) => dispatch (booksError(error)));
}

export {
    fetchBooks,
    bookAddedToCart,
    bookRemoveFromCart,
    allBooksAddedToCart
}