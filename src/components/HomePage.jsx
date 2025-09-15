import { useOutletContext, useSearchParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

export default function HomePage() {
  const { tasks, onTaskClick, onDeleteTaskClick, onAddTaskClick } =
    useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const showCompleted = searchParams.get("showCompleted") === "true";

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.isCompleted);

  return (
    <>
      <h1 className="text-3xl text-amber-100 font-bold text-center">
        Gerenciador de Tarefas
      </h1>
      <AddTask onAddTaskClick={onAddTaskClick} />
      <div className="my-4">
        <button
          onClick={() =>
            setSearchParams({ showCompleted: String(!showCompleted) })
          }
          className="cursor-pointer w-full bg-gray-700 text-white p-2 rounded-md font-bold hover:bg-gray-600 transition"
        >
          {showCompleted
            ? "Ocultar Tarefas Concluídas"
            : "Mostrar Tarefas Concluídas"}
        </button>
      </div>
      <Task
        tasks={filteredTasks}
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
      />
    </>
  );
}
