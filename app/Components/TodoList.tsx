import { ITask } from "@/types/task";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask;
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(
            (task: {
              id: React.Key | null | undefined;
              text:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <Task key={task.id} task={task} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
