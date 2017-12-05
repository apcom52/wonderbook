import React from 'react';
import CollectionTile from "./CollectionTile";
import Icon from 'Icon';

export default class CollectionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [
                {
                    id: 1,
                    title: 'Избранные книги',
                    icon: 'star',
                    count: 9,
                    special: 'favorite'
                },
                {
                    id: 2,
                    title: 'Загруженные книги',
                    icon: 'book',
                    count: 14,
                    special: 'downloads'
                },
                {
                    id: 3,
                    title: 'Недавно прочитанные',
                    icon: 'history',
                    count: 2,
                    special: 'latest'
                },
                {
                    id: 4,
                    title: 'Чтение на ночь',
                    count: 3
                },
                {
                    id: 5,
                    title: 'Ужастики',
                    count: 6
                }
            ]
        }
    }

    render() {
        const collection = this.state.collections.map((current) =>
            <CollectionTile key={current.id} title={current.title} icon={current.icon} count={current.count} special={current.special} />
        );

        return (
            <div className="collection-list">
                {collection}
                <div className="collection-item collection-item--add" tabIndex="0">
                    <div className="collection-item__title"><Icon icon="plus-circle"/></div>
                </div>
            </div>
        );
    }
}