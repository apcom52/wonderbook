import React from 'react';
import Book from "./Book";
import Loading from "./Loading";

export default class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            preview: false
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

    render() {
        let books = <Loading/>

        if (this.state.books.length) {
            books = this.state.books.map((current) =>
                <Book key={current.id} title={current.title} cover={current.cover} />
            );
        }

        return (
            <div className="books-list">
                {books}
            </div>
        );
    }
}