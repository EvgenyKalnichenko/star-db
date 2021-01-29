const booksRequested = () => {
    return{
        type:'FETCH_BOOKS_REQUESTED',
    }
};

const booksLoaded = (newBooks) => {
    return{
        type:'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return{
        type:'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//     dispatch(booksRequested());
//     bookstoreService.getBooks()
//         .then((data) =>dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)));
// };

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) =>dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

const bookAddedToCart = (bookId) => {
    return{
        type:'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const deleteToCart = (bookId) => {
    return{
        type:'DELETE_TO_CART',
        payload: bookId
    }
};

const deleteAllToCart = (bookId) => {
    return{
        type:'DELETE_ALL_TO_CART',
        payload: bookId
    }
};

export {
    fetchBooks,
    bookAddedToCart,
    deleteToCart,
    deleteAllToCart
}
