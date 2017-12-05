import React from 'react';
import Link from 'react-router-dom';

export default class AppTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    id: 1,
                    title: 'Мои коллекции',
                    link: '#/',
                },
                {
                    id: 2,
                    title: 'Все книги',
                    link: '#/library'
                }
            ],
            current: 1
        }
    }

    componentDidMount() {
        this.state.tabs.forEach((current) => {
            if (window.location.hash == current.link) {
                this.setState({
                    current: current.id
                });
            }
        });
    }

    handleClick(id) {
        this.setState({
            current: id
        });
    }

    render() {
        const tabs = this.state.tabs.map((current) => {
            let clsName = 'app-tabs__tab';
            if (current.id == this.state.current) clsName += ' app-tabs__tab--active';
            return <a href={current.link} className={clsName} key={current.id} onClick={this.handleClick.bind(this, current.id)}>{current.title}</a>;
        });

        return (
            <div className="app-tabs">{tabs}</div>
        )
    }
}