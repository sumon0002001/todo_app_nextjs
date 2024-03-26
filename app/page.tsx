import { getAllTodos } from "@/api";
import AddTask from "./Components/AddTask";
import TodoList from "./Components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="className='max-w-4xl mx-auto mt-4'">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold underline">Todo List App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
