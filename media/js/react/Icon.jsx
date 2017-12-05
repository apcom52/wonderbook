import React from 'react';

export default class Icon extends React.Component {
    render() {
        let cls = 'lnr lnr-' + this.props.icon;
        return (
            <i className={cls} />
        )
    }
}