import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-900 rounded-md shadow my-6">
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          } else {
            onAddTaskClick(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="cursor-pointer w-full bg-orange-700 text-white p-4 rounded-md font-bold hover:bg-orange-500 transition duration-300 ease-in-out shadow-amber-200/5 shadow-lg"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskClick: PropTypes.func.isRequired,
};

export default AddTask;
