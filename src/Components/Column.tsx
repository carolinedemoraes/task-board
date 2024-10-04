
import React from 'react';
import { ColumnType } from '../Types/ColumnType';
import Task from './Task';
import { ColumnContainer, ColumnTitle, TaskList } from './Board.styles';
import { TaskType } from '../Types/TaskType';

interface ColumnProps {
    column: ColumnType;
    tasks: TaskType[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{column.title}</ColumnTitle>
            <TaskList>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </TaskList>
        </ColumnContainer>
    );
};

export default Column;
