
import React from 'react';
import { TaskType } from "../Types/TaskType";
import { TaskItem } from './Board.styles';

interface TaskProps {
    task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <TaskItem>
            <li>
                <h3>{task.title}</h3>
                <p>{task.body}</p>

            </li>


        </TaskItem>

    );
};

export default Task;
