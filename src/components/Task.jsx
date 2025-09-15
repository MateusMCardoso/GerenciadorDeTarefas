import { ChevronRightIcon, Trash } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    navigate(`/task/${task.id}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-900 rounded-md shadow">
      {tasks.map((task) => (
        <li className="flex animate-slide-in gap-2" key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-800 text-left w-full flex items-center gap-3 text-white p-4 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-800 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-red-900 p-2 rounded-md text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 ease-in-out"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Task;
