import React from 'react';
import Icon from "./Icon";
import Loading from "./Loading";

export default class BookPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            book_id: 0,
            book: {},
            modal: null,
        };
    }

    close() {
        this.setState({
            visible: false,
            book_id: 0,
            book: {}
        });
    }

    open(book_id = 0) {
        $.get('/api/books/' + book_id.toString(), {},
            (r) => {
                this.setState({
                    visible: true,
                    book_id: book_id,
                    book: r
                });
            }
        );

        console.log(book_id);

        this.state.modal.show();
    }

    componentDidMount() {
        this.setState({
            modal: new BookWindow(() => { this.close(); })
        });

        console.log(this.state.modal);
    }

    render() {
        let modal_content = <Loading/>

        if (this.state.book_id != 0) {
            modal_content = <div><h1 className="book-window__book-title">{this.state.book.title}</h1>
                <div className="book-info">
                    <div className="book-info__title">Жанры</div>
                    <div className="book-info__content">
                        <div className="tags">
                            <div className="tags__item">Фэнтези</div>
                            <div className="tags__item">Приключения</div>
                        </div>
                    </div>
                </div>
                <div className="book-info">
                    <div className="book-info__title">Краткое описание</div>
                    <div className="book-info__content">{this.state.book.description}</div>
                </div>
                <div className="book-info">
                    <div className="book-info__title">ISBN</div>
                    <div className="book-info__content">{this.state.book.isbn}</div>
                </div></div>;
        }

        return (
            <div className="book-window" id="book-window">
                <div className="book-window__left-side">
                    <img src={this.state.book.cover} alt="" className="book-window__cover" />
                    <div className="book-window__buttons padding-1">
                        <button className="button--size-large button--icon button--fit button--color-olive button--rounded"><Icon icon="book"/> Читать</button>
                    </div>
                </div>
                <div className="book-window__right-side">
                    {modal_content}
                </div>
            </div>
        );
    }
}