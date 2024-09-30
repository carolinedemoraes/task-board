import React from 'react';
import { ColumnType } from "../Types/ColumnType";
import Column from './Column';

interface BoardProps {
    columns: ColumnType[];
}

const Board: React.FC<BoardProps> = ({ columns }) => {
    return (
        <div>
            <h1>Task Board</h1>
            {columns.map((column) => (
                // Passa as tarefas da coluna específica para o componente Column
                <Column key={column.id} column={column} tasks={column.tasks} />
            ))}
        </div>
    );
};

export default Board;
