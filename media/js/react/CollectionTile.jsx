import React from 'react';
import Icon from 'Icon';

export default class CollectionTile extends React.Component {
    render() {
        let icon = '';
        if (this.props.icon) icon = <Icon icon={this.props.icon} />;

        let tileClassName = 'collection-item';
        if (this.props.special) tileClassName += ' collection-item--' + this.props.special;

        return (
            <div className={tileClassName} tabIndex={0}>
                <div className="collection-item__title">{icon} {this.props.title}</div>
                <div className="collection-item__count">{this.props.count}</div>
            </div>
        )
    }
}