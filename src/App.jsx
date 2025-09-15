import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (!storedTasks) return [];
    try {
      const parsed = JSON.parse(storedTasks);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Falha ao analisar as tarefas do localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskClick(title, description) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-950 flex justify-center p-6">
      <div className="w-[500px]">
        <Outlet
          context={{ tasks, onTaskClick, onDeleteTaskClick, onAddTaskClick }}
        />
      </div>
    </div>
  );
}

export default App;
