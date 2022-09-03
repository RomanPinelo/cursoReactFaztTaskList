import { createContext, useState, useEffect } from 'react';
// Manejar nombres iguales en import y useState genera conflictos.
// Para solucionarlo ponemos un alias con as
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id != taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}