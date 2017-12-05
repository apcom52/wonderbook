import React from 'react';
import Icon from "./Icon";
import Loading from "./Loading";

export default class BookPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "",
            desc: "",
            cover: "",
            isbn: "",
            modal: null,
        };

        this.show.bind(this);
    }

    componentDidMount() {
        let book_id = this.props.book_id;


    }

    show(book_id = 0) {
        if (this.state.modal == null) {
            this.setState({
                modal: new BookWindow()
            })
        }

        this.state.modal.show();

        $.get('/api/books/' + book_id.toString(), {},
            (r) => {
                this.setState({
                    id: r.id,
                    title: r.title,
                    desc: r.desc,
                    cover: r.cover,
                    isbn: r.isbn
                });
        });
    }

    render() {
        let modal_content = <Loading/>

        if (this.state.id != 0) {
            modal_content = <div><h1 className="book-window__book-title">{this.state.title}</h1>
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
                    <div className="book-info__content">{this.state.desc}</div>
                </div>
                <div className="book-info">
                    <div className="book-info__title">ISBN</div>
                    <div className="book-info__content">{this.state.isbn}</div>
                </div></div>;
        }

        return (
            <div className="book-window" id="book-window">
                <div className="book-window__left-side">
                    <img src="" alt="" className="book-window__cover"/>
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