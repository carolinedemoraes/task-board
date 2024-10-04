import { TaskType } from "./TaskType";


export interface ColumnType {
    id: number;
    title: string;
    tasks: TaskType[];
}
