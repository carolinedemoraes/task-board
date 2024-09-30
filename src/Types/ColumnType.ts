import { TaskType } from "./TaskType";


export interface ColumnType {
    id: number;
    title: string;
    tasks: TaskType[]; // 'tasks' deve ser um array de objetos do tipo TaskType
}
