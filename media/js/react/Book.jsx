import React from 'react';

export default class Book extends React.Component {
    handleClick(book_id) {

    }

    render() {
        return (
            <div className="book">
                <img src={this.props.cover} alt=""/>
                <div className="book__title">{this.props.title}</div>
                <div className="book__overlay">
                    <button className="button--color-red button--only-borders button--rounded">Удалить</button>
                    <button className="button--color-olive button--only-borders button--rounded" onClick={this.handleClick.bind(this, this.props.key)}>Открыть</button>
                </div>
            </div>
        );
    }
}