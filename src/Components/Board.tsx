import React from 'react';
import { ColumnType } from "../Types/ColumnType";
import { BoardContainer } from './Board.styles';
import Column from './Column';

interface BoardProps {
    columns: ColumnType[];
}

const Board: React.FC<BoardProps> = ({ columns }) => {
    return (
        <div>
            <BoardContainer>

                {columns.map((column) => (
                    <Column key={column.id} column={column} tasks={column.tasks} />
                ))}
            </BoardContainer>

        </div>

    );
};

export default Board;


