import React from 'react';
import TasksList from "./TasksList";
import Loading from "./Loading";
import BookPreview from "./BookPreview";

export default class AppScreen extends React.Component {
    render() {
        return (
            <div className="grid appscreen">
                <div className="col-9 collections">
                    {this.props.children}
                </div>
                <div className="col-3 tasks">
                    <h1>Задачи</h1>
                    <TasksList/>
                </div>
            </div>
        );
    }
}