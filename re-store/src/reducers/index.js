const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
};

const reducer = (state = initialState, action) => {

    switch (action.type){
        case 'FETCH_BOOKS_REQUESTED':
            return {
               ...state,
                books:[],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books:action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books:[],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[itemIndex];
            let newItem;
            let newArray;

            if(item){
                newItem = {
                    ...item,
                    count: item.count + 1,
                    total: item.total + book.price
                };

                newArray = [...state.cartItems.slice(0, itemIndex), newItem, ...state.cartItems.slice(itemIndex + 1)];
            }else {
                 newItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                 };

                 newArray = [...state.cartItems, newItem];
            }

            return {
                ...state,
                cartItems: newArray
            };
        case 'DELETE_TO_CART':
            return {
                ...state,
                cartItems: []
            };




        default:
            return state;
    }
};

export default reducer;
