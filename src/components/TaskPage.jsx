import {
  useOutletContext,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function TaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, onDeleteTaskClick } = useOutletContext();

  const task = tasks.find((t) => String(t.id) === id);

  if (!task) {
    // Redireciona para a página inicial se a tarefa não for encontrada
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <h1 className="text-3xl text-amber-100 font-bold text-center">
        Detalhes da Tarefa
      </h1>
      <div className="p-6 bg-slate-900 rounded-md shadow my-6 space-y-4">
        <h2 className="text-2xl text-amber-500">{task.title}</h2>
        <p className="text-white">{task.description}</p>
        <button
          onClick={() => {
            onDeleteTaskClick(task.id);
            navigate("/");
          }}
          className="bg-red-900 p-2 rounded-md w-full text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 ease-in-out"
        >
          Deletar Tarefa
        </button>
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer w-full bg-gray-700 text-white p-2 rounded-md font-bold hover:bg-gray-600 transition flex justify-center"
        >
          <ArrowLeft />
        </button>
      </div>
    </>
  );
}

export default TaskPage;
