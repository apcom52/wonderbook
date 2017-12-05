import React from 'react';
import Task from "./Task";

export default class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    title: '"Война и мир"',
                    desc: 'понедельника',
                    progress: 45
                },
                {
                    id: 2,
                    title: '"Гарри Поттер и Дары Смерти"',
                    desc: 'пятницы',
                    progress: 15
                },
                {
                    id: 3,
                    title: '"Война и мир"',
                    desc: 'понедельника',
                    progress: 75
                }
            ]
        };
    }
    render() {
        const tasks = this.state.tasks.map((current) =>
            <Task key={current.id} title={current.title} desc={current.desc} progress={current.progress} />
        );
        return (
            <div className="tasks">
                {tasks}
            </div>
        );
    }
}