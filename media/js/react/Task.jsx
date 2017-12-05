import React from 'react';

export default class Task extends React.Component {
    render() {
        return (
            <div className="task">
                <div className="task__title">Прочитать {this.props.title}</div>
                <div className="task__desc">до {this.props.desc}</div>
                <div className="progress">
                    <div className="progress__active progress__active--color-red" style={{width: this.props.progress + '%'}}>{this.props.progress}%</div>
                </div>
            </div>
        );
    }
}