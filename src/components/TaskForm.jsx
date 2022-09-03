import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((title === '') && (description === '')) {
      alert('Ingresa un titulo y una descripción.');
    } else if (title === '') {
      alert('Ingresa un titulo.');
    } else if (description === '') {
      alert('Ingresa una descripción.');
    } else {
      createTask({
        title,
        description
      });
      setTitle('');
      setDescription('');
    }
  }

  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold text-white mb-3'>
          Crea tu tarea
        </h1>
        <input className='bg-slate-300 p-3 w-full mb-2' placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='Escribe la descripción de la tarea'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        ></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md'>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm