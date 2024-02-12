"use client";

import { ITask } from "@/types/task";
import React from "react";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Completed</td>
    </tr>
  );
};

export default Task;
