import React from 'react';
import Book from "./Book";
import Loading from "./Loading";
import BookPreview from "./BookPreview";

export default class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            bookPreview: null,
            bookPreviewIsVisible: false,
            selectedBookId: 0,
        };
    }

    componentDidMount() {
        $.get('/api/books',
            {},
            (r) => {
                this.setState({
                    books: r
                })
            }
        );
    }

    /*componentWillUpdate(nextProps, nextState) {
        if (nextState.bookPreviewIsVisible) {
            this.state.bookPreview.show(nextState.selectedBookId);
        }
    }*/

    showModal(book_id) {
        this.setState({
            bookPreviewIsVisible: true,
            selectedBookId: book_id
        });
    }


    render() {
        let books = <Loading/>

        if (this.state.books.length) {
            books = this.state.books.map((current) =>
                <Book key={current.id} id={current.id} title={current.title} cover={current.cover} preview={this.bookModal} />
            );
        }

        return (
            <div className="books-list">
                {books}
                <BookPreview ref={(modal) => { this.bookModal = modal; }}/>
            </div>
        );
    }
}