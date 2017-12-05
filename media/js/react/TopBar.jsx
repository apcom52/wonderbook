import React from 'react';
import Icon from 'Icon';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.setState({
            user: document.body.getAttribute('data-username')
        });
        console.log('body ' + document.body.getAttribute('data-username'));
    }

    render() {
        return (
            <div className="topbar">
                <img className="topbar__logo" tabIndex={0} src="/media/img/logo.png" />
                <input type="search" placeholder="Поиск..." className="topbar__search" tabIndex={0} />
                <div className="topbar__item" tabIndex={0}><Icon icon="moon" /></div>
                <div className="topbar__item" tabIndex={0}><Icon icon="upload" /></div>
                <div className="topbar__item" tabIndex={0}><Icon icon="mustache"/> {this.state.user}</div>
            </div>
        );
    }
}