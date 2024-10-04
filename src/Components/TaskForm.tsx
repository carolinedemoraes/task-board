import React, { useState } from 'react';
import { TaskType } from '../Types/TaskType';
import { FormContainer, Input, Textarea, Select, Button } from './TaskForm.styles';

interface TaskFormProps {
    onSubmit: (task: TaskType) => void;
    columns: { id: number; title: string }[]; // Adicionando as colunas como props
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, columns }) => {
    const [task, setTask] = useState<TaskType>({ id: 0, title: '', body: '', columnId: 0 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.columnId === 0) {
            alert("Selecione uma coluna válida");
            return;
        }
        onSubmit(task);
        setTask({ id: 0, title: '', body: '', columnId: 0 });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Input
                type="text"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                placeholder="Título da Tarefa"
            />
            <Textarea
                value={task.body}
                onChange={(e) => setTask({ ...task, body: e.target.value })}
                placeholder="Descrição"
            />
            <Select
                value={task.columnId}
                onChange={(e) => setTask({ ...task, columnId: Number(e.target.value) })}
            >
                <option value="0">Selecione uma Coluna</option>
                {columns.map(column => (
                    <option key={column.id} value={column.id}>{column.title}</option>
                ))}
            </Select>
            <Button type="submit">Criar Tarefa</Button>
        </FormContainer>
    );
};

export default TaskForm;
