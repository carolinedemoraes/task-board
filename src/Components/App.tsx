import { useState } from 'react';
import Board from "./Board";
import TaskForm from "./TaskForm";
import { ColumnType } from '../Types/ColumnType';
import { TaskType } from '../Types/TaskType';



function App() {
  const [columns, setColumns] = useState<ColumnType[]>([
    {
      id: 1,
      title: "To Do",
      tasks: [
        { id: 1, title: 'Tarefa 1', body: 'Fazer tarefa 1', columnId: 1 },
        { id: 2, title: 'Tarefa 2', body: 'Fazer tarefa 2', columnId: 1 }
      ]
    },
    {
      id: 2,
      title: "Doing",
      tasks: [
        { id: 3, title: 'Tarefa 3', body: 'Fazendo tarefa 3', columnId: 2 }
      ]
    },
    {
      id: 3,
      title: "Done",
      tasks: [
        { id: 4, title: 'Tarefa 4', body: 'Finalizada tarefa 4', columnId: 3 }
      ]
    }
  ]);

  const addTask = (task: TaskType) => {
    if (task.columnId === 0) {
      alert("Por favor, selecione uma coluna válida.");
      return;
    }

    setColumns(columns.map(column => column.id === task.columnId ? { ...column, tasks: [...column.tasks, task] } : column
    ));
  };

  return (
    <div>
      <TaskForm columns={columns} onSubmit={addTask} />
      <Board columns={columns} />

    </div>
  );
}

export default App;
