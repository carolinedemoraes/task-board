// Task.tsx
import React from 'react';
import { TaskType } from "../Types/TaskType";

interface TaskProps {
    task: TaskType; // A tarefa individual
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <li>
            <h3>{task.title}</h3>
            <p>{task.body}</p>
        </li>
    );
};

export default Task;
