import { useEffect, useState } from "react";

import { getTasks } from "../../services/taskService";

import TaskCard from "../../components/cards/TaskCard";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  return (
    <div>
      <h1
        className="
          text-4xl
          font-bold
        "
      >
        My Tasks
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          mt-8
        "
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}

export default Tasks;