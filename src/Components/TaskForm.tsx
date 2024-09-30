import React, { useState } from 'react';
import { ColumnType } from "../Types/ColumnType";
import { TaskType } from '../Types/TaskType';

interface TaskFormProps {
    onSubmit: (task: TaskType) => void;
    columns: ColumnType[];
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, columns }) => {
    const [task, setTask] = useState<TaskType>({ id: 0, title: '', body: '', columnId: 0 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(task);
        setTask({ id: 0, title: '', body: '', columnId: 0 }); // Limpa o formulário após a submissão
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                placeholder="Título da Tarefa"
            />
            <textarea
                value={task.body}
                onChange={(e) => setTask({ ...task, body: e.target.value })}
                placeholder="Descrição"
            />
            <select
                value={task.columnId}
                onChange={(e) => setTask({ ...task, columnId: Number(e.target.value) })}
            >
                <option value="0">Selecione uma Coluna</option>
                {columns.map(column => (
                    <option key={column.id} value={column.id}>{column.title}</option>
                ))}
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    );
};

export default TaskForm;
