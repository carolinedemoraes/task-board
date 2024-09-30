import React from 'react';
import { ColumnType } from "../Types/ColumnType";
import { TaskType } from '../Types/TaskType';
import Task from './Task';

interface ColumnProps {
    column: ColumnType;
    tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
    return (
        <div>
            <h2>{column.title}</h2>
            <ul>
                {/* Renderiza as tarefas da coluna */}
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default Column;
