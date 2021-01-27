import React, {Component} from 'react'
import './book-list.css'
import BookListItem from "../book-list-item";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { connect } from 'react-redux';
import withBookstoreService from "../hoc/with-bookstore-service";
import {compose} from "../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCart}) => {

    return(
        <ul className='book-list'>
            {
                books.map((book) => {
                    return(
                        <li key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => {dispatch(bookAddedToCart(id))}
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);


// const mapDispatchToProps = (dispatch) => {
//Вариант 1
// return{
//     booksLoaded: (newBooks) => {
//         dispatch({
//             type: 'BOOKS_LOADED',
//             payload: newBooks
//         })
//     }
// // };

//Вариант 2
// return{
//     booksLoaded: (newBooks) => {
//         dispatch(booksLoaded(newBooks));
//     }
// };

//Вариант 3
//     return bindActionCreators({
//         booksLoaded
//     },dispatch)
// };
//Вариант 4
// const mapDispatchToProps = {
//     booksLoaded,
//     booksError,
//     booksRequested
// };

// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// );
