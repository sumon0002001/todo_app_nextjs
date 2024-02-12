import { ITask } from "./types/task";

const baseURL = "http://localhost:3001";

export const getAllTasks = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/tasks`);
  const todos = await response.json();
  return todos;
};
